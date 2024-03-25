const upload = require('../middleware/multer'); // Import the multer middleware
const testimonialService = require('../services/testimonial');
const fs = require('fs');
const multer = require('multer');

const testimonialController = {
  // Create a new testimonial document
  createTestimonial: async (req, res) => {
    try {
      req.params.folderName = "testimonial";
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading file' });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        const testimonialData = {
          title: req.body.title,
          description: req.body.description,
          image: req.file ? req.file.path : '',
          jobTitle: req.body.jobTitle
        };

        const testimonial = await testimonialService.createTestimonial(testimonialData);
        res.status(201).json(testimonial);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all testimonial documents
  getAllTestimonials: async (req, res) => {
    try {
      const testimonials = await testimonialService.getAllTestimonials();
      res.status(200).json(testimonials);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific testimonial document by ID
  getTestimonialById: async (req, res) => {
    try {
      const testimonial = await testimonialService.getTestimonialById(req.params.id);
      if (!testimonial) {
        return res.status(404).json({ error: 'Testimonial not found' });
      }
      res.status(200).json(testimonial);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific testimonial document by ID
  updateTestimonial: async (req, res) => {
    try {
      req.params.folderName = "testimonial";
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading file' });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        // Check if there's a new image uploaded
        if (req.file) {
          // If a new image is uploaded, update the image path
          req.body.image = req.file.path;

          // Remove the previous image if it exists
          const testimonialToUpdate = await testimonialService.getTestimonialById(req.params.id);
          if (testimonialToUpdate.image) {
            try {
              fs.unlinkSync(testimonialToUpdate.image);
            } catch (unlinkError) {
              console.error("Error deleting previous image:", unlinkError.message);
            }
          }
        }

        const updatedTestimonial = await testimonialService.updateTestimonial(req.params.id, req.body);
        if (!updatedTestimonial) {
          return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.status(200).json(updatedTestimonial);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific testimonial document by ID
  deleteTestimonial: async (req, res) => {
    try {
      const testimonial = await testimonialService.deleteTestimonial(req.params.id);
      if (!testimonial) {
        return res.status(404).json({ error: 'Testimonial not found' });
      }
      if (testimonial.image) {
        fs.unlinkSync(testimonial.image);
      }
      res.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = testimonialController;
