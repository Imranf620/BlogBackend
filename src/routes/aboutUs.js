const express = require('express');
const router = express.Router();
const aboutUsController = require('../controllers/aboutUs');
const uploadMiddleware = require('../middleware/uploadMultipleFiles');


router.post('/about', uploadMiddleware('about/'), aboutUsController.createAboutUs);
router.get('/about', aboutUsController.getAllAboutUs);
router.get('/about/:id', aboutUsController.getAboutUsById);
router.put('/about/:id', uploadMiddleware('about/'), aboutUsController.updateAboutUs);
router.delete('/about/:id', aboutUsController.deleteAboutUs);

module.exports = router;
