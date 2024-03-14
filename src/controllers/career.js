const careerService = require('../services/career');

const careerController = {
  // Create a new career document
  createCareer: async (req, res) => {
    try {
      const career = await careerService.createCareer(req.body);
      res.status(201).json(career);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all career documents
  getAllCareers: async (req, res) => {
    try {
      const careers = await careerService.getAllCareers();
      res.status(200).json(careers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific career document by ID
  getCareerById: async (req, res) => {
    try {
      const career = await careerService.getCareerById(req.params.id);
      if (!career) {
        return res.status(404).json({ error: 'Career not found' });
      }
      res.status(200).json(career);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific career document by ID
  updateCareer: async (req, res) => {
    try {
      const career = await careerService.updateCareer(req.params.id, req.body);
      if (!career) {
        return res.status(404).json({ error: 'Career not found' });
      }
      res.status(200).json(career);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific career document by ID
  deleteCareer: async (req, res) => {
    try {
      const career = await careerService.deleteCareer(req.params.id);
      if (!career) {
        return res.status(404).json({ error: 'Career not found' });
      }
      res.status(200).json({ message: 'Career deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = careerController;
