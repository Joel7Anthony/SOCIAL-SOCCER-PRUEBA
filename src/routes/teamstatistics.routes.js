const express = require("express");
const router = express.Router();
const TeamstatisticsController = require('../controllers/teamstatistics.controller');
const { isLoggedIn } = require('../lib/auth');
const photoTeamsController = require('../controllers/photoTeams.controller');


router.get('/', isLoggedIn, teamsController.getListTeamstatistics);
router.post('/teams', isLoggedIn,teamsController.postTeamstatistics);
router.get('/add', isLoggedIn, teamsController.getAddTeamstatistics);
router.get('/list-teams', isLoggedIn,teamsController.getListTeamstatistics);
router.get('/delete-teams/:id', isLoggedIn,teamsController.deleteTeamstatistics);
router.get('/edit-teams/:id', isLoggedIn,teamsController.getTeamstatistics);
router.post('/edit-teams/:id', isLoggedIn,teamsController.updateTeamstatistics);


module.exports = router;