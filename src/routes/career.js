const express = require('express');
const router = express.Router();
const careerController = require('../controllers/career');

router.post('/career', careerController.createCareer);
router.get('/career', careerController.getAllCareers);
router.get('/career/:id', careerController.getCareerById);
router.put('/career/:id', careerController.updateCareer);
router.delete('/career/:id', careerController.deleteCareer);

module.exports = router;
