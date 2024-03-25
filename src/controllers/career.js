const upload = require('../middleware/multer'); // Import the multer middleware
const careerService = require('../services/career');
const fs = require('fs');
const multer = require('multer');

const careerController = {
  // Create a new career document
  createCareer: async (req, res) => {
    req.params.folderName = "career";
    try {
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading file' });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        const career = await careerService.createCareer({
          ...req.body,
          image: req.file ? req.file.path : '' // Save the image path to the database
        });
        res.status(201).json(career);
      });
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
    req.params.folderName = "career";
    try {
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading file' });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        // Check if there's a new image uploaded
        if (req.file) {
          console.log(req.file)
          // If a new image is uploaded, update the image path
          req.body.image = req.file.path;

          // Remove the previous image if it exists
          const careerToUpdate = await careerService.getCareerById(req.params.id);
          if (careerToUpdate.image) {
            try {
              fs.unlinkSync(careerToUpdate.image);
            } catch (unlinkError) {
              console.error("Error deleting previous image:", unlinkError.message);
            }
          }
        }

        const career = await careerService.updateCareer(req.params.id, req.body);
        if (!career) {
          return res.status(404).json({ error: 'Career not found' });
        }
        res.status(200).json(career);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific career document by ID
  deleteCareer: async (req, res) => {
    try {
      const career = await careerService.getCareerById(req.params.id);
      if (!career) {
        return res.status(404).json({ error: 'Career not found' });
      }
      if (career.image) {
        fs.unlinkSync(career.image);
      }
      await careerService.deleteCareer(req.params.id);

      res.status(200).json({ message: 'Career deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = careerController;
