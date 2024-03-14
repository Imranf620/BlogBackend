const Profile = require('../models/profile');

const profileService = {
  // Create a new profile
  createProfile: async (profileData) => {
    try {
      const profile = new Profile(profileData);
      await profile.save();
      return profile;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get profile by account ID
  getProfileByAccountId: async (accountId) => {
    try {
      return await Profile.findOne({ account: accountId }).populate('account');
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update profile by account ID
  updateProfileByAccountId: async (accountId, updatedData) => {
    try {
      return await Profile.findOneAndUpdate({ account: accountId }, updatedData, { new: true }).populate('account');
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = profileService;
