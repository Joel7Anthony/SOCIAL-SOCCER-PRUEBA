const express = require('express');
const router = express.Router();
//onst playersController = require('../controllers/players.controller');
const playerstatisticsController = require('../controllers/playerstatistics.controller.js');
//const { isLoggedIn } = require('../lib/auth');
//const photoPlayerstatisticsController = require('../controllers/photoPlayerstatistics.controller');

//viws players
router.get('/',  playerstatisticsController.getListPlayerstatistics);
router.post('/playerstatistics',playerstatisticsController.postPlayerstatistic);
router.get('/add', playerstatisticsController.getAddPlayerstatistics);
router.get('/list-playerstatistics',playerstatisticsController.getListPlayerstatistics);
router.get('/delete-playerstatistics/:id',playerstatisticsController.deletePlayerstatistic);
router.get('/edit-playerstatistics/:id',playerstatisticsController.getPlayerstatistic);
router.post('/edit-playerstatistics/:id',playerstatisticsController.updatePlayerstatistic);



//views photo
//router.post('/photo-playerstatistics/:id', photoPlayerstatisticsController.updatePhoto);

module.exports = router;