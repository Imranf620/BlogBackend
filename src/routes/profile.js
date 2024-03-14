const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');

router.post('/profile', profileController.createProfile);
router.get('/profile/:accountId', profileController.getProfileByAccountId);
router.put('/profile/:accountId', profileController.updateProfileByAccountId);

module.exports = router;
