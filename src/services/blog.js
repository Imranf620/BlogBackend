const Blog = require('../models/blog');

const blogService = {
  // Create a new blog document
  createBlog: async (blogData) => {
    try {
      const blog = new Blog(blogData);
      await blog.save();
      return blog;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get all blog documents
  getAllBlogs: async () => {
    try {
      return await Blog.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a specific blog document by ID
  getBlogById: async (id) => {
    try {
      return await Blog.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update a specific blog document by ID
  updateBlog: async (id, updatedData) => {
    try {
      return await Blog.findByIdAndUpdate(id, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Delete a specific blog document by ID
  deleteBlog: async (id) => {
    try {
      return await Blog.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = blogService;
