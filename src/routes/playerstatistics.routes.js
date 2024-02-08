const express = require('express');
const router = express.Router();
//onst playersController = require('../controllers/players.controller');
const playerstatisticsController = require('../controllers/playerstatistics.controller.js');
const { isLoggedIn } = require('../lib/auth');
//const photoPlayerstatisticsController = require('../controllers/photoPlayerstatistics.controller');

//viws players
router.get('/', isLoggedIn, playerstatisticsController.getListPlayerstatistics);
router.post('/playerstatistics', isLoggedIn, playerstatisticsController.postPlayerstatistic);
router.get('/add', isLoggedIn, playerstatisticsController.getAddPlayerstatistics);
router.get('/list-playerstatistics', isLoggedIn,playerstatisticsController.getListPlayerstatistics);
router.get('/delete-playerstatistics/:id', isLoggedIn, playerstatisticsController.deletePlayerstatistic);
router.get('/edit-playerstatistics/:id', isLoggedIn, playerstatisticsController.getPlayerstatistic);
router.post('/edit-playerstatistics/:id',isLoggedIn, playerstatisticsController.updatePlayerstatistic);



//views photo
//router.post('/photo-playerstatistics/:id', photoPlayerstatisticsController.updatePhoto);

module.exports = router;