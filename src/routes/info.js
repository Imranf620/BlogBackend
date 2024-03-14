const express = require('express');
const router = express.Router();
const infoController = require('../controllers/info');

router.post('/info', infoController.createInfo);
router.get('/info', infoController.getAllInfos);
router.get('/info/:id', infoController.getInfoById);
router.put('/info/:id', infoController.updateInfo);
router.delete('/info/:id', infoController.deleteInfo);

module.exports = router;
