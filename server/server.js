const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const Images = require('./model');
const User=require('./model1');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
app.use(cors());
app.use(express.json());

app.listen(4000, () => {
    console.log("Server started on port 4000");
});

mongoose.connect("mongodb+srv://322103312083:951509290@cluster0.8iess.mongodb.net/movie")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });


cloudinary.config({
    cloud_name: "dthh2uenu", 
    api_key: "184761731987834",
    api_secret: "3BY0vtJkpgH7vJ527uMEsJ58tHs",
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        allowed_formats: ['jpg', 'jpeg', 'png'],
    },
});

const upload = multer({ storage: storage });

// Endpoint to upload an image with additional fields
app.post('/uploadimage', upload.single('image'), async (req, res) => {
    const imageUrl = req.file.path; // Cloudinary returns the file URL in 'path'
    const { name, price, grams,userName } = req.body;

    try {
        await Images.create({
            image: imageUrl,
            name: name,
            price: price,
            grams: grams,
            userName:userName
        });
        res.json({ status: "ok" });
    } catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).send("Error uploading image: " + error.message);
    }
});

app.get('/getimage', async (req, res) => {
    try {
        const data = await Images.find({});
        res.json({ status: "ok", data: data });
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ status: "error", message: "Error fetching images" });
    }
});


const JWT_SECRET = 'your_jwt_secret_key';

// Sign Up Route
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      console.error('Error during signup:', err); 
      res.status(500).json({ error: 'Something went wrong on the server' });
    }
  });
  

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (err) {
      console.error('Error during login:', err); 
      res.status(500).json({ error: 'Something went wrong on the server' });
    }
  });
  

  const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from header
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.userId = decoded.id; // Attach user ID to the request object
      next();
    } catch (error) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
  };
  
  // Profile route
  app.get('/profile', verifyToken, async (req, res) => {
    try {
      // Fetch user data based on the ID from the token
      const user = await User.findById(req.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Respond with user data (excluding password)
      res.json({
        name: user.name,
        email: user.email,
        // Add any other fields you'd like to send
      });
    } catch (err) {
      console.error('Error fetching profile:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  



