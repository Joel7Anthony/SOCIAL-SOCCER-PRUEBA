const express = require("express");
const router = express.Router();
//const teamsController = require('../controllers/teams.controller');
const { isLoggedIn } = require('../lib/auth');
const photoTeamsController = require('../controllers/photoTeams.controller')


router.get('/', isLoggedIn, teamsController.getListTeamstatistics);
router.post('/teams', isLoggedIn,teamsController.postTeamsta);
router.get('/add', isLoggedIn, teamsController.getAddTeams);
router.get('/list-teams', isLoggedIn,teamsController.getListTeams);
router.get('/delete-teams/:id', isLoggedIn,teamsController.deleteTeam);
router.get('/edit-teams/:id', isLoggedIn,teamsController.getTeam);
router.post('/edit-teams/:id', isLoggedIn,teamsController.updateTeam);


module.exports = router;
