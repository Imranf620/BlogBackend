// models/partnershipsModel.js

const mongoose = require('mongoose');

// Define the schema for the partnerships collection
const partnershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  benefit: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Create a model for the 'partnerships' collection using the schema
const Partnership = mongoose.model('Partnership', partnershipSchema);

module.exports = Partnership;
