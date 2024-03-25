const Testimonial = require('../models/testimonial');

const testimonialService = {
  // Create a new testimonial member document
  createTestimonial: async (testimonialData) => {
    try {
      const testimonial = new Testimonial(testimonialData);
      await testimonial.save();
      return testimonial;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get all testimonial member documents
  getAllTestimonials: async () => {
    try {
      return await Testimonial.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a specific testimonial member document by ID
  getTestimonialById: async (id) => {
    try {
      return await Testimonial.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update a specific testimonial member document by ID
  updateTestimonial: async (id, updatedData) => {
    try {
      return await Testimonial.findByIdAndUpdate(id, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Delete a specific testimonial member document by ID
  deleteTestimonial: async (id) => {
    try {
      return await Testimonial.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = testimonialService;
