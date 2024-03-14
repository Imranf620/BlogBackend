const serviceService = require('../services/service');

const serviceController = {
  // Create a new service document
  createService: async (req, res) => {
    try {
      const service = await serviceService.createService(req.body);
      res.status(201).json(service);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all service documents
  getAllServices: async (req, res) => {
    try {
      const services = await serviceService.getAllServices();
      res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific service document by ID
  getServiceById: async (req, res) => {
    try {
      const service = await serviceService.getServiceById(req.params.id);
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific service document by ID
  updateService: async (req, res) => {
    try {
      const service = await serviceService.updateService(req.params.id, req.body);
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.status(200).json(service);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific service document by ID
  deleteService: async (req, res) => {
    try {
      const service = await serviceService.deleteService(req.params.id);
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = serviceController;
