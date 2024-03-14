const blogService = require('../services/blog');

const blogController = {
  // Create a new blog document
  createBlog: async (req, res) => {
    try {
      const blog = await blogService.createBlog(req.body);
      res.status(201).json(blog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all blog documents
  getAllBlogs: async (req, res) => {
    try {
      const blogs = await blogService.getAllBlogs();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific blog document by ID
  getBlogById: async (req, res) => {
    try {
      const blog = await blogService.getBlogById(req.params.id);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific blog document by ID
  updateBlog: async (req, res) => {
    try {
      const blog = await blogService.updateBlog(req.params.id, req.body);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(200).json(blog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific blog document by ID
  deleteBlog: async (req, res) => {
    try {
      const blog = await blogService.deleteBlog(req.params.id);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = blogController;
