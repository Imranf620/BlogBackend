// app.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Import the AboutUs model
const setupDatabase = require('./setupDatabase');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });