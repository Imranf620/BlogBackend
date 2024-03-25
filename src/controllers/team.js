const upload = require('../middleware/multer'); // Import the multer middleware
const teamService = require('../services/team');
const fs = require('fs');
const multer = require('multer');

const teamController = {
  // Create a new team member document
  createTeamMember: async (req, res) => {
    try {
      req.params.folderName = "team";
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: 'Error uploading file' });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }

        const teamMember = await teamService.createTeamMember({
          ...req.body,
          image: req.file ? req.file.path : '' // Save the image path to the database
        });
        res.status(201).json(teamMember);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all team member documents
  getAllTeamMembers: async (req, res) => {
    try {
      const teamMembers = await teamService.getAllTeamMembers();
      res.status(200).json(teamMembers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific team member document by ID
  getTeamMemberById: async (req, res) => {
    try {
      const teamMember = await teamService.getTeamMemberById(req.params.id);
      if (!teamMember) {
        return res.status(404).json({ error: 'Team member not found' });
      }
      res.status(200).json(teamMember);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific team member document by ID
  updateTeamMember: async (req, res) => {
    try {
      req.params.folderName = "team";
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
          const teamMemberToUpdate = await teamService.getTeamMemberById(req.params.id);
          if (teamMemberToUpdate.image) {
            try {
              fs.unlinkSync(teamMemberToUpdate.image);
            } catch (unlinkError) {
              console.error("Error deleting previous image:", unlinkError.message);
            }
          }
        }

        const teamMember = await teamService.updateTeamMember(req.params.id, req.body);
        if (!teamMember) {
          return res.status(404).json({ error: 'Team member not found' });
        }
        res.status(200).json(teamMember);
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific team member document by ID
  deleteTeamMember: async (req, res) => {
    try {
      const teamMember = await teamService.deleteTeamMember(req.params.id);
      if (!teamMember) {
        return res.status(404).json({ error: 'Team member not found' });
      }
      if (teamMember.image) {
        fs.unlinkSync(teamMember.image);
      }
      res.status(200).json({ message: 'Team member deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = teamController;
