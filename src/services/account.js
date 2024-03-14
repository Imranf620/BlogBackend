const bcrypt = require('bcrypt');
const Account = require('../models/account');

const accountService = {
  // Signup with hashed password
  signup: async (email, password) => {
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create new account
      const account = new Account({ email, password: hashedPassword });
      await account.save();
      return account;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Login
  login: async (email, password) => {
    try {
      // Find account by email
      const account = await Account.findOne({ email });
      if (!account) {
        throw new Error('Account not found');
      }
      // Compare password
      const isPasswordValid = await bcrypt.compare(password, account.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }
      return account;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getAccountByEmail: async (email) => {
    try {
      return await Account.findOne({ email });
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = accountService;
