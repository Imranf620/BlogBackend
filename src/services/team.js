const Team = require('../models/team');

const teamService = {
  // Create a new team member document
  createTeamMember: async (teamMemberData) => {
    try {
      const teamMember = new Team(teamMemberData);
      await teamMember.save();
      return teamMember;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get all team member documents
  getAllTeamMembers: async () => {
    try {
      return await Team.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a specific team member document by ID
  getTeamMemberById: async (id) => {
    try {
      return await Team.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update a specific team member document by ID
  updateTeamMember: async (id, updatedData) => {
    try {
      return await Team.findByIdAndUpdate(id, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Delete a specific team member document by ID
  deleteTeamMember: async (id) => {
    try {
      return await Team.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = teamService;
