// models/careersModel.js

const mongoose = require('mongoose');

// Define the schema for the careers collection
const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Create a model for the 'careers' collection using the schema
const Career = mongoose.model('Career', careerSchema);

module.exports = Career;
