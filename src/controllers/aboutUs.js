const aboutUsService = require('../services/aboutUs');

const aboutUsController = {
  // Create a new aboutUs document
  createAboutUs: async (req, res) => {
    try {
      const aboutUs = await aboutUsService.createAboutUs(req.body);
      res.status(201).json(aboutUs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all aboutUs documents
  getAllAboutUs: async (req, res) => {
    try {
      const aboutUsList = await aboutUsService.getAllAboutUs();
      res.status(200).json(aboutUsList);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific aboutUs document by ID
  getAboutUsById: async (req, res) => {
    try {
      const aboutUs = await aboutUsService.getAboutUsById(req.params.id);
      if (!aboutUs) {
        return res.status(404).json({ error: 'AboutUs not found' });
      }
      res.status(200).json(aboutUs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific aboutUs document by ID
  updateAboutUs: async (req, res) => {
    try {
      const aboutUs = await aboutUsService.updateAboutUs(req.params.id, req.body);
      if (!aboutUs) {
        return res.status(404).json({ error: 'AboutUs not found' });
      }
      res.status(200).json(aboutUs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific aboutUs document by ID
  deleteAboutUs: async (req, res) => {
    try {
      const aboutUs = await aboutUsService.deleteAboutUs(req.params.id);
      if (!aboutUs) {
        return res.status(404).json({ error: 'AboutUs not found' });
      }
      res.status(200).json({ message: 'AboutUs deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = aboutUsController;
