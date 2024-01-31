const express = require("express");
const router = express.Router();
const teamstatisticsController = require('../controllers/teamstatistics.controller.js');
const { isLoggedIn } = require('../lib/auth');



router.get('/', isLoggedIn, teamstatisticsController.getListTeamstatistics);
router.post('/teams', isLoggedIn,teamstatisticsController.postTeamstatistics);
router.get('/add', isLoggedIn, teamstatisticsController.getAddTeamstatistics);
router.get('/list-teams', isLoggedIn,teamstatisticsController.getListTeamstatistics);
router.get('/delete-teams/:id', isLoggedIn,teamstatisticsController.deleteTeamstatistics);
router.get('/edit-teams/:id', isLoggedIn,teamstatisticsController.getTeamstatistics);
router.post('/edit-teams/:id', isLoggedIn,teamstatisticsController.updateTeamstatistics);


module.exports = router;