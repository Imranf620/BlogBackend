const Career = require('../models/career');

const careerService = {
  // Create a new career document
  createCareer: async (careerData) => {
    try {
      const career = new Career(careerData);
      await career.save();
      return career;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get all career documents
  getAllCareers: async () => {
    try {
      return await Career.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a specific career document by ID
  getCareerById: async (id) => {
    try {
      return await Career.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update a specific career document by ID
  updateCareer: async (id, updatedData) => {
    try {
      return await Career.findByIdAndUpdate(id, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Delete a specific career document by ID
  deleteCareer: async (id) => {
    try {
      return await Career.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = careerService;
