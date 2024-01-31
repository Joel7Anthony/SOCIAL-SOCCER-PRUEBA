const express = require('express');
const router = express.Router();
//onst playersController = require('../controllers/players.controller');
const playerstatisticsController = require('../controllers/playerstatistics.controller.js');
const { isLoggedIn } = require('../lib/auth');
const photoPlayerstatisticsController = require('../controllers/photoPlayers.controller');

//viws players
router.get('/', isLoggedIn, playerstatisticsController.getListPlayerstatistics);
router.post('/players', isLoggedIn,playerstatisticsController.postPlayerstatistics);
router.get('/add', isLoggedIn, playerstatisticsController.getAddTeams);
router.get('/list-players', isLoggedIn,playerstatisticsController.getListPlayerstatistics);
router.get('/delete-players/:id', isLoggedIn,playerstatisticsController.deletePlayerstatistics);
router.get('/edit-players/:id', isLoggedIn,playerstatisticsController.getPlayerstatistics);
router.post('/edit-players/:id', isLoggedIn,playerstatisticsController.updatePlayerstatistics);



//views photo
router.post('/photo-playerstatistics/:id', isLoggedIn, photoPlayerstatisticsController.updatePhoto);

module.exports = router;