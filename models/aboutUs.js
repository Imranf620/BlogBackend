// models/aboutUsModel.js

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
  }
});

// Create a model for the 'aboutUs' collection using the schema
const AboutUs = mongoose.model('AboutUs', aboutUsSchema);

module.exports = AboutUs;
