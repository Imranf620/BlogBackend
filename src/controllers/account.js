const accountService = require('../services/account');
const profileService = require('../services/profile'); // Import profile service

const accountController = {
  // Signup
  signup: async (req, res) => {
    try {
      const { email, password, firstName, lastName, phoneNumber } = req.body;
      // Check if account with email already exists
      const existingAccount = await accountService.getAccountByEmail(email);
      if (existingAccount) {
        return res.status(400).json({ error: 'Account with this email already exists' });
      }
      // Signup
      const account = await accountService.signup(email, password);
      // Create profile
      const profile = await profileService.createProfile({ account: account._id, firstName, lastName, phoneNumber });
      res.status(201).json({ account, profile });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      // Login
      const account = await accountService.login(email, password);
      res.status(200).json(account);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
};

module.exports = accountController;
