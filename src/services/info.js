const Info = require('../models/info');

const infoService = {
  // Create a new info document
  createInfo: async (infoData) => {
    try {
      const info = new Info(infoData);
      await info.save();
      return info;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get all info documents
  getAllInfos: async () => {
    try {
      return await Info.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a specific info document by ID
  getInfoById: async (id) => {
    try {
      return await Info.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update a specific info document by ID
  updateInfo: async (id, updatedData) => {
    try {
      return await Info.findByIdAndUpdate(id, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Delete a specific info document by ID
  deleteInfo: async (id) => {
    try {
      return await Info.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = infoService;
