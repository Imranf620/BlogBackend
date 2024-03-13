// models/servicesModel.js

const mongoose = require('mongoose');

// Define the schema for the services collection
const serviceSchema = new mongoose.Schema({
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

// Create a model for the 'services' collection using the schema
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
