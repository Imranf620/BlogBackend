const mongoose = require('mongoose');

// Define the schema for the aboutUs collection
const aboutUsSchema = new mongoose.Schema({
  mission: {
    type: String,
    required: true
  },
  vision: {
    type: String,
    required: true
  },
  image1: {
    type: String,
    required: true
  },
  image2: {
    type: String,
    required: true
  },
  image3: {
    type: String,
    required: true
  },

}, { timestamps: true }); // Add timestamps option here

// Create a model for the 'aboutUs' collection using the schema
const AboutUs = mongoose.model('AboutUs', aboutUsSchema);

module.exports = AboutUs;
