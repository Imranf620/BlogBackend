const Service = require('../models/service');

const serviceService = {
  // Create a new service document
  createService: async (serviceData) => {
    try {
      const service = new Service(serviceData);
      await service.save();
      return service;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get all service documents
  getAllServices: async () => {
    try {
      return await Service.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a specific service document by ID
  getServiceById: async (id) => {
    try {
      return await Service.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update a specific service document by ID
  updateService: async (id, updatedData) => {
    try {
      return await Service.findByIdAndUpdate(id, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Delete a specific service document by ID
  deleteService: async (id) => {
    try {
      return await Service.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = serviceService;
