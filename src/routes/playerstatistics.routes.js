const express = require('express');
const router = express.Router();
//onst playersController = require('../controllers/players.controller');
const Playerstatistics = require('../controllers/playerstatistics.controller');
const { isLoggedIn } = require('../lib/auth');
const photoPlayersController = require('../controllers/photoPlayers.controller');

//viws players
router.get('/', isLoggedIn, playersController.getListPlayerstatistics);
router.post('/players', isLoggedIn,playersController.postPlayerstatistics);
router.get('/add', isLoggedIn, playersController.getAddTeams);
router.get('/list-players', isLoggedIn,playersController.getListPlayerstatistics);
router.get('/delete-players/:id', isLoggedIn,playersController.deletePlayerstatistics);
router.get('/edit-players/:id', isLoggedIn,playersController.getPlayerstatistics);
router.post('/edit-players/:id', isLoggedIn,playersController.updatePlayerstatistics);



//views photo
router.post('/photo-player/:id', isLoggedIn, photoPlayersController.updatePhoto);

module.exports = router;