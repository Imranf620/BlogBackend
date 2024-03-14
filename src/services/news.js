const News = require('../models/news');

const newsService = {
  // Create a new news document
  createNews: async (newsData) => {
    try {
      const news = new News(newsData);
      await news.save();
      return news;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get all news documents
  getAllNews: async () => {
    try {
      return await News.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a specific news document by ID
  getNewsById: async (id) => {
    try {
      return await News.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update a specific news document by ID
  updateNews: async (id, updatedData) => {
    try {
      return await News.findByIdAndUpdate(id, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Delete a specific news document by ID
  deleteNews: async (id) => {
    try {
      return await News.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = newsService;
