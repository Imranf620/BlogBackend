const upload = require('../middleware/multer'); // Import the multer middleware
const newsService = require('../services/news');
const fs = require('fs');
const multer = require('multer');

const newsController = {
  // Create a new news document
  createNews: async (req, res) => {
    try {
      req.params.folderName = "news";
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading file' });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        const news = await newsService.createNews({
          ...req.body,
          image: req.file ? req.file.path : '' // Save the image path to the database
        });
        res.status(201).json(news);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all news documents
  getAllNews: async (req, res) => {
    try {
      const news = await newsService.getAllNews();
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific news document by ID
  getNewsById: async (req, res) => {
    try {
      const news = await newsService.getNewsById(req.params.id);
      if (!news) {
        return res.status(404).json({ error: 'News not found' });
      }
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific news document by ID
  updateNews: async (req, res) => {
    try {
      req.params.folderName = "news";
      upload(req, res, async function (err) {
        
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading file' });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        // Check if there's a new image uploaded
        if (req.file) {
          // If a new image is uploaded, update the image path
          req.body.image = req.file.path;

          // Remove the previous image if it exists
          const newsToUpdate = await newsService.getNewsById(req.params.id);
          if (newsToUpdate.image) {
            try {
              fs.unlinkSync(newsToUpdate.image);
            } catch (unlinkError) {
              console.error("Error deleting previous image:", unlinkError.message);
            }
          }
        }

        const news = await newsService.updateNews(req.params.id, req.body);
        if (!news) {
          return res.status(404).json({ error: 'News not found' });
        }
        res.status(200).json(news);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific news document by ID
  deleteNews: async (req, res) => {
    try {
      const news = await newsService.deleteNews(req.params.id);
      if (!news) {
        return res.status(404).json({ error: 'News not found' });
      }
      if (news.image) {
        fs.unlinkSync(news.image);
      }
      res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = newsController;
