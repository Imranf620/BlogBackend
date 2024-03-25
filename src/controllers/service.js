const upload = require('../middleware/multer'); // Import the multer middleware
const serviceService = require('../services/service');
const fs = require('fs');
const multer = require('multer');

const serviceController = {
  // Create a new service document
  createService: async (req, res) => {
    try {
      req.params.folderName = "service";
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading file' });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        const service = await serviceService.createService({
          ...req.body,
          image: req.file ? req.file.path : '' // Save the image path to the database
        });
        res.status(201).json(service);
      });
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
      req.params.folderName = "service";
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
          const serviceToUpdate = await serviceService.getServiceById(req.params.id);
          if (serviceToUpdate.image) {
            try {
              fs.unlinkSync(serviceToUpdate.image);
            } catch (unlinkError) {
              console.error("Error deleting previous image:", unlinkError.message);
            }
          }
        }

        const service = await serviceService.updateService(req.params.id, req.body);
        if (!service) {
          return res.status(404).json({ error: 'Service not found' });
        }
        res.status(200).json(service);
      });
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
      if (service.image) {
        fs.unlinkSync(service.image);
      }
      res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = serviceController;
