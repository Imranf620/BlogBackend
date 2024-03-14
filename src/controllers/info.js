const infoService = require('../services/info');

const infoController = {
  // Create a new info document
  createInfo: async (req, res) => {
    try {
      const info = await infoService.createInfo(req.body);
      res.status(201).json(info);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all info documents
  getAllInfos: async (req, res) => {
    try {
      const infos = await infoService.getAllInfos();
      res.status(200).json(infos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific info document by ID
  getInfoById: async (req, res) => {
    try {
      const info = await infoService.getInfoById(req.params.id);
      if (!info) {
        return res.status(404).json({ error: 'Info not found' });
      }
      res.status(200).json(info);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific info document by ID
  updateInfo: async (req, res) => {
    try {
      const info = await infoService.updateInfo(req.params.id, req.body);
      if (!info) {
        return res.status(404).json({ error: 'Info not found' });
      }
      res.status(200).json(info);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific info document by ID
  deleteInfo: async (req, res) => {
    try {
      const info = await infoService.deleteInfo(req.params.id);
      if (!info) {
        return res.status(404).json({ error: 'Info not found' });
      }
      res.status(200).json({ message: 'Info deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = infoController;
