// models/accountModel.js

const mongoose = require('mongoose');

// Define the schema for the accounts collection
const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true });

// Create a model for the 'accounts' collection using the schema
const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
