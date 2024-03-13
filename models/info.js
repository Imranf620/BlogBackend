// models/infosModel.js

const mongoose = require('mongoose');

// Define the schema for the infos collection
const infoSchema = new mongoose.Schema({
  companyProfile: {
    type: String,
    required: true
  },
  howWeWork: {
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
  image4: {
    type: String,
    required: true
  },
  image5: {
    type: String,
    required: true
  },
  whyChooseUs: {
    type: String,
    required: true,
  }
});

// Create a model for the 'infos' collection using the schema
const Info = mongoose.model('Info', infoSchema);

module.exports = Info;
