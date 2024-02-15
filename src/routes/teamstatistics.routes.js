const express = require("express");
const router = express.Router();
const teamstatisticsController = require ('../controllers/teamstatistics.controller');
const { isLoggedIn } = require('../lib/auth');
const photoTeamstatisticsController = require('../controllers/photoTeamstatistics.controller.js')



router.get('/',isLoggedIn, teamstatisticsController.getListTeamstatistics);
router.post('/teamstatistics',isLoggedIn,teamstatisticsController.postTeamstatistic);
router.get('/add',isLoggedIn, teamstatisticsController.getAddTeamstatistics);
router.get('/list-teamstatistics',isLoggedIn,teamstatisticsController.getListTeamstatistics);
router.get('/delete-teamstatistics/:id',isLoggedIn,teamstatisticsController.deleteTeamstatistic);
router.get('/edit-teamstatistics/:id',isLoggedIn,teamstatisticsController.getTeamstatistic);
router.post('/edit-teamstatistics/:id',isLoggedIn,teamstatisticsController.updateTeamstatistic);

router.post('/photo-teamstatistic/:id',isLoggedIn,  photoTeamstatisticsController.updatePhoto);
module.exports = router;