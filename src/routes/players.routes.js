const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players.controller');
const { isLoggedIn } = require('../lib/auth');
const photoPlayersController = require('../controllers/photoPlayers.controller')

//viws players
router.get('/', isLoggedIn, playersController.getListPlayers);
router.post('/players', isLoggedIn,playersController.postPlayer);
router.get('/add', isLoggedIn, playersController.getAddPlayers);
router.get('/list-players', isLoggedIn,playersController.getListPlayers);
router.get('/delete-players/:idplayers', isLoggedIn,playersController.deletePlayer);
router.get('/edit-players/:idplayers', isLoggedIn,playersController.getPlayer);
router.post('/edit-players/:idplayers', isLoggedIn,playersController.updatePlayer);




//views photo
router.post('/photo-player/:idplayers', isLoggedIn, photoPlayersController.updatePhoto);

module.exports = router;