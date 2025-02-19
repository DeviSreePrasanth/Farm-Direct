// model.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    grams: String,
    userName:String
});

module.exports = mongoose.model('Image', imageSchema);
