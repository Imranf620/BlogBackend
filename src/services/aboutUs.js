const AboutUs = require('../models/aboutUs');

const aboutUsService = {
  // Create a new aboutUs document
  createAboutUs: async (aboutUsData) => {
    try {
      const aboutUs = new AboutUs(aboutUsData);
      await aboutUs.save();
      return aboutUs;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get all aboutUs documents
  getAllAboutUs: async () => {
    try {
      return await AboutUs.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a specific aboutUs document by ID
  getAboutUsById: async (id) => {
    try {
      return await AboutUs.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update a specific aboutUs document by ID
  updateAboutUs: async (id, updatedData) => {
    try {
      return await AboutUs.findByIdAndUpdate(id, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Delete a specific aboutUs document by ID
  deleteAboutUs: async (id) => {
    try {
      return await AboutUs.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = aboutUsService;
