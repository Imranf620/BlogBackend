// models/teamsModel.js

const mongoose = require('mongoose');

// Define the schema for the teams collection
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  facebook: {
    type: String,
    required: false,
    default: null
  },
  instagram: {
    type: String,
    required: false,
    default: null
  },
  linkedin: {
    type: String,
    required: false,
    default: null
  }
});

// Create a model for the 'teams' collection using the schema
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
