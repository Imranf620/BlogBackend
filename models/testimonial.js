// models/testimonialModel.js

const mongoose = require('mongoose');

// Define the schema for the testimonials collection
const testimonialSchema = new mongoose.Schema({
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
  },
  jobTitle: {
    type: String,
    required: true
  },
});

// Create a model for the 'testimonials' collection using the schema
const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
