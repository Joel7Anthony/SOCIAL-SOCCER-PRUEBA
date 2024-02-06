const express = require("express");
const router = express.Router();
const teamsController = require('../controllers/teams.controller');
//const { isLoggedIn } = require('../lib/auth');
const photoTeamsController = require('../controllers/photoTeams.controller')


router.get('/',  teamsController.getListTeams);
router.post('/teams', teamsController.postTeam);
router.get('/add',  teamsController.getAddTeams);
router.get('/list-teams', teamsController.getListTeams);
router.get('/delete-teams/:id', teamsController.deleteTeam);
router.get('/edit-teams/:id', teamsController.getTeam);
router.post('/edit-teams/:id', teamsController.updateTeam);

//views profile

router.post('/photo-team/:id',  photoTeamsController.updatePhoto);



module.exports = router;
