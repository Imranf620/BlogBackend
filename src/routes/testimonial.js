const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonial');

router.post('/testimonial', testimonialController.createTestimonial);
router.get('/testimonial', testimonialController.getAllTestimonials);
router.get('/testimonial/:id', testimonialController.getTestimonialById);
router.put('/testimonial/:id', testimonialController.updateTestimonial);
router.delete('/testimonial/:id', testimonialController.deleteTestimonial);

module.exports = router;
