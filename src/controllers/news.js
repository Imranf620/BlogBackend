const newsService = require('../services/news');

const newsController = {
  // Create a new news document
  createNews: async (req, res) => {
    try {
      const news = await newsService.createNews(req.body);
      res.status(201).json(news);
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
      const news = await newsService.updateNews(req.params.id, req.body);
      if (!news) {
        return res.status(404).json({ error: 'News not found' });
      }
      res.status(200).json(news);
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
      res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = newsController;
