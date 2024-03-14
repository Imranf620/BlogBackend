const express = require('express');
const router = express.Router();
const partnershipController = require('../controllers/partnership');

router.post('/partnership', partnershipController.createPartnership);
router.get('/partnership', partnershipController.getAllPartnerships);
router.get('/partnership/:id', partnershipController.getPartnershipById);
router.put('/partnership/:id', partnershipController.updatePartnership);
router.delete('/partnership/:id', partnershipController.deletePartnership);

module.exports = router;
