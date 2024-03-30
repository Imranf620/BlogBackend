const upload = require("../middleware/multer"); // Import the multer middleware
const partnershipService = require("../services/partnership");
const fs = require("fs");
const multer = require("multer");

const partnershipController = {
  // Create a new partnership document
  createPartnership: async (req, res) => {
    try {
      req.params.folderName = "partners";
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: "Error uploading file" });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        const partnership = await partnershipService.createPartnership({
          ...req.body,
          image: req.file ? req.file.path : "", // Save the image path to the database
        });
        res.status(201).json(partnership);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all partnership documents
  getAllPartnerships: async (req, res) => {
    try {
      const partnerships = await partnershipService.getAllPartnerships();
      res.status(200).json(partnerships);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific partnership document by ID
  getPartnershipById: async (req, res) => {
    try {
      const partnership = await partnershipService.getPartnershipById(
        req.params.id
      );
      if (!partnership) {
        return res.status(404).json({ error: "Partnership not found" });
      }
      res.status(200).json(partnership);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific partnership document by ID
  updatePartnership: async (req, res) => {
    try {
      req.params.folderName = "partners";
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: "Error uploading file" });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        // Check if there's a new image uploaded
        if (req.file) {
          // If a new image is uploaded, update the image path
          req.body.image = req.file.path;

          // Remove the previous image if it exists
          const partnershipToUpdate =
            await partnershipService.getPartnershipById(req.params.id);
          if (partnershipToUpdate.image) {
            try {
              fs.unlinkSync(partnershipToUpdate.image);
            } catch (unlinkError) {
              console.error(
                "Error deleting previous image:",
                unlinkError.message
              );
            }
          }
        }

        const partnership = await partnershipService.updatePartnership(
          req.params.id,
          req.body
        );
        if (!partnership) {
          return res.status(404).json({ error: "Partnership not found" });
        }
        res.status(200).json(partnership);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific partnership document by ID
  deletePartnership: async (req, res) => {
    try {
      const partnership = await partnershipService.deletePartnership(
        req.params.id
      );
      if (!partnership) {
        return res.status(404).json({ error: "Partnership not found" });
      }
      if (partnership.image) {
        fs.unlinkSync(partnership.image);
      }
      res.status(200).json({ message: "Partnership deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = partnershipController;
