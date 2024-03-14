const teamService = require('../services/team');

const teamController = {
  // Create a new team member document
  createTeamMember: async (req, res) => {
    try {
      const teamMember = await teamService.createTeamMember(req.body);
      res.status(201).json(teamMember);
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
      const teamMember = await teamService.updateTeamMember(req.params.id, req.body);
      if (!teamMember) {
        return res.status(404).json({ error: 'Team member not found' });
      }
      res.status(200).json(teamMember);
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
      res.status(200).json({ message: 'Team member deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = teamController;
