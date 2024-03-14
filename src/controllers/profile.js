const profileService = require('../services/profile');

const profileController = {
  // Create a new profile
  createProfile: async (req, res) => {
    try {
      const profile = await profileService.createProfile(req.body);
      res.status(201).json(profile);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get profile by account ID
  getProfileByAccountId: async (req, res) => {
    try {
      const profile = await profileService.getProfileByAccountId(req.params.accountId);
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update profile by account ID
  updateProfileByAccountId: async (req, res) => {
    try {
      const profile = await profileService.updateProfileByAccountId(req.params.accountId, req.body);
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.status(200).json(profile);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = profileController;
