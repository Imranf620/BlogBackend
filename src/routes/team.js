const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team');

router.post('/team', teamController.createTeamMember);
router.get('/team', teamController.getAllTeamMembers);
router.get('/team/:id', teamController.getTeamMemberById);
router.put('/team/:id', teamController.updateTeamMember);
router.delete('/team/:id', teamController.deleteTeamMember);

module.exports = router;
