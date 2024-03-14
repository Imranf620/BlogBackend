// models/profileModel.js

const mongoose = require('mongoose');

// Define the schema for the profiles collection
const profileSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
}, { timestamps: true });

// Create a model for the 'profiles' collection using the schema
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
