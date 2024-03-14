// models/contactsModel.js

const mongoose = require('mongoose');

// Define the schema for the contacts collection
const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  facebook: {
    type: String,
    required: false,
    default: null
  },
  instagram: {
    type: String,
    required: false,
    default: null
  },
  linkedin: {
    type: String,
    required: false,
    default: null
  }
}, { timestamps: true });

// Create a model for the 'contacts' collection using the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
