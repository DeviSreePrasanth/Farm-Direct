import React, { useState, useRef } from 'react';
import axios from 'axios';
import { AiOutlineUpload, AiOutlineForm, AiOutlineDollarCircle } from 'react-icons/ai';
import { FaBox, FaCheckCircle } from 'react-icons/fa';
import Modal from './Modal';  // Import the Modal component
import Profile from './Myprofile';  // Import the Profile component
import { FaUser } from "react-icons/fa";
import MyChart from './MyChart'

const Farmer = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [grams, setGrams] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [cropDetails, setCropDetails] = useState({});
  const fileInputRef = useRef(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userName, setUserName] = useState('')
  const toggleProfile = () => setIsProfileOpen(prevState => !prevState);

  const onInputChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleGramsChange = (e) => setGrams(e.target.value);
  const handleuserNameChange = (e) => setUserName(e.target.value);

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("grams", grams);
    formData.append("userName", userName);


    try {
      await axios.post("https://farmdirectserver.vercel.app/uploadimage", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setCropDetails({
        image: imagePreview,
        name: name,
        price: price,
        grams: grams,
        userName: userName,
      });
      setShowPopup(true);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const closePopup = () => setShowPopup(false);

  return (

    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-amber-500 p-4 shadow-md text-teal-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">Farmer Dashboard</div>
          <div className="space-x-4 flex">
            <FaUser
              className="text-teal-900 cursor-pointer text-2xl  relative"
              onClick={toggleProfile}
            />
            {isProfileOpen && (
              <div
                className="absolute top-12 right-0 z-50"
                style={{ width: '300px' }}
              >
                <Modal onClose={() => setIsProfileOpen(false)}>
                  <Profile />
                </Modal>
              </div>
            )}
            <p className="hover:underline font-semibold">Settings</p>
          </div>
        </div>
      </nav>
      <div>
        <div className="flex-1 flex justify-center p-4 bg-white">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">
              <FaBox className="inline-block text-4xl mb-1" /> Upload Crop Details
            </h1>
            <form onSubmit={submitImage} className="space-y-6">
              <div className="mb-4 relative">
                {!imagePreview ? (
                  <div
                    className="flex items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer bg-gray-50"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <AiOutlineUpload className="text-gray-500 text-4xl" />
                    <span className="ml-2 text-gray-500 text-lg">Click to upload</span>
                  </div>
                ) : (
                  <div className="mt-4">
                    <center>
                      <img
                        src={imagePreview}
                        alt="Crop preview"
                        className="w-full h-auto object-cover rounded-md border border-gray-300"
                      />
                    </center>
                  </div>
                )}
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={onInputChange}
                  ref={fileInputRef}
                  className="hidden"
                />
              </div>
              <div className="flex items-center mb-4">
                <AiOutlineForm className="text-gray-600 text-2xl mr-2 mt-6" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Product Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter product name"
                    value={name}
                    onChange={handleNameChange}
                    className="block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <AiOutlineDollarCircle className="text-gray-600 text-2xl mr-2 mt-6" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="price">
                    Price (in Rs)
                  </label>
                  <input
                    id="price"
                    type="number"
                    placeholder="Set price"
                    value={price}
                    onChange={handlePriceChange}
                    className="block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <AiOutlineForm className="text-gray-600 text-2xl mr-2 mt-6" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="grams">
                    Quantity (e.g., 1000gm)
                  </label>
                  <input
                    id="grams"
                    type="text"
                    placeholder="Enter quantity"
                    value={grams}
                    onChange={handleGramsChange}
                    className="block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <AiOutlineForm className="text-gray-600 text-2xl mr-2 mt-6" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="grams">
                    Name
                  </label>
                  <input
                    id="userName"
                    type="text"
                    placeholder="Enter your Name"
                    value={userName}
                    onChange={handleuserNameChange}
                    className="block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-teal-800 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <div className="flex items-center justify-between">
                <FaCheckCircle className="text-green-500 text-4xl" />
                <button
                  onClick={closePopup}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  &times;
                </button>
              </div>
              <h2 className="text-xl font-bold text-green-800 mt-4">Crop Details</h2>
              <div className="mt-4">
                <img
                  src={cropDetails.image}
                  alt="Crop"
                  className="w-full h-48 object-cover rounded-md border border-gray-300"
                />
                <p className="mt-2 text-gray-700"><strong>Name:</strong> {cropDetails.name}</p>
                <p className="text-gray-700"><strong>Price:</strong> {cropDetails.price} Rs</p>
                <p className="text-gray-700"><strong>Quantity:</strong> {cropDetails.grams}</p>
                <p className="text-gray-700"><strong>Name:</strong> {cropDetails.userName}</p>
              </div>
            </div>
          </div>
        )}
        <MyChart />
      </div>
    </div>
  );
};

export default Farmer;
