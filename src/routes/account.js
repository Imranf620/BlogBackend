const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');

// Signup route
router.post('/signup', accountController.signup);

// Login route
router.post('/login', accountController.login);

module.exports = router;
