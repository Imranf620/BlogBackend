const partnershipService = require('../services/partnership');

const partnershipController = {
  // Create a new partnership document
  createPartnership: async (req, res) => {
    try {
      const partnership = await partnershipService.createPartnership(req.body);
      res.status(201).json(partnership);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all partnership documents
  getAllPartnerships: async (req, res) => {
    try {
      const partnerships = await partnershipService.getAllPartnerships();
      res.status(200).json(partnerships);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific partnership document by ID
  getPartnershipById: async (req, res) => {
    try {
      const partnership = await partnershipService.getPartnershipById(req.params.id);
      if (!partnership) {
        return res.status(404).json({ error: 'Partnership not found' });
      }
      res.status(200).json(partnership);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific partnership document by ID
  updatePartnership: async (req, res) => {
    try {
      const partnership = await partnershipService.updatePartnership(req.params.id, req.body);
      if (!partnership) {
        return res.status(404).json({ error: 'Partnership not found' });
      }
      res.status(200).json(partnership);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific partnership document by ID
  deletePartnership: async (req, res) => {
    try {
      const partnership = await partnershipService.deletePartnership(req.params.id);
      if (!partnership) {
        return res.status(404).json({ error: 'Partnership not found' });
      }
      res.status(200).json({ message: 'Partnership deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = partnershipController;
