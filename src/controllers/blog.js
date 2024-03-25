const upload = require('../middleware/multer'); // Import the multer middleware
const blogService = require('../services/blog');
const multer = require('multer');
const fs = require('fs');



const blogController = {
  // Create a new blog document
  createBlog: async (req, res) => {
    req.params.folderName = "blog";
    try {
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading file' });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        const blog = await blogService.createBlog({
          ...req.body,
          image: req.file ? req.file.path : '' // Save the image path to the database
        });
        res.status(201).json(blog);
      });
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
  updateBlog: async (req, res) => {
    req.params.folderName = "blog";
    try {
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading file' });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (req.file) {
          req.body.image = req.file.path;
          const blogToUpdate = await blogService.getBlogById(req.params.id);
          if (blogToUpdate.image) {
            try {
              fs.unlinkSync(blogToUpdate.image);
            } catch (unlinkError) {
              console.error("Error deleting previous image:", unlinkError.message);
            }
          }
        }
  
        const blog = await blogService.updateBlog(req.params.id, req.body);
        if (!blog) {
          return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json(blog);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  

  // Delete a specific blog document by ID
  deleteBlog: async (req, res) => {
    try {
      const blog = await blogService.getBlogById(req.params.id);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      if (blog.image) {
        fs.unlinkSync(blog.image);
      }
      await blogService.deleteBlog(req.params.id);

      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = blogController;
