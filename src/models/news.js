// models/newssModel.js

const mongoose = require('mongoose');

// Define the schema for the newss collection
const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  },
}, { timestamps: true });

// Create a model for the 'newss' collection using the schema
const News = mongoose.model('News', newsSchema);

module.exports = News;
