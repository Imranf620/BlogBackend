const express = require('express');
const router = express.Router();
const aboutUsController = require('../controllers/aboutUs');

router.post('/about', aboutUsController.createAboutUs);
router.get('/about', aboutUsController.getAllAboutUs);
router.get('/about/:id', aboutUsController.getAboutUsById);
router.put('/about/:id', aboutUsController.updateAboutUs);
router.delete('/about/:id', aboutUsController.deleteAboutUs);

module.exports = router;
