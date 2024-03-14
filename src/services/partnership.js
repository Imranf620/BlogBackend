const Partnership = require('../models/partnership');

const partnershipService = {
  // Create a new partnership document
  createPartnership: async (partnershipData) => {
    try {
      const partnership = new Partnership(partnershipData);
      await partnership.save();
      return partnership;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get all partnership documents
  getAllPartnerships: async () => {
    try {
      return await Partnership.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a specific partnership document by ID
  getPartnershipById: async (id) => {
    try {
      return await Partnership.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update a specific partnership document by ID
  updatePartnership: async (id, updatedData) => {
    try {
      return await Partnership.findByIdAndUpdate(id, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Delete a specific partnership document by ID
  deletePartnership: async (id) => {
    try {
      return await Partnership.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = partnershipService;
