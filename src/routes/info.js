const express = require('express');
const router = express.Router();
const infoController = require('../controllers/info');
const uploadMiddleware = require('../middleware/uploadMultipleFiles');

// Define routes
router.post('/info', uploadMiddleware('info/'), infoController.createInfo);
router.put('/info/:id', uploadMiddleware('info/'), infoController.updateInfo);
router.get('/info', infoController.getAllInfos);
router.get('/info/:id', infoController.getInfoById);
router.delete('/info/:id', infoController.deleteInfo);

module.exports = router;
