// models/blogsModel.js

const mongoose = require('mongoose');

// Define the schema for the blogs collection
const blogSchema = new mongoose.Schema({
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
  }
});

// Create a model for the 'blogs' collection using the schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
