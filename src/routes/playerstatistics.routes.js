const express = require('express');
const router = express.Router();
const playerstatisticsController = require('../controllers/playerstatistics.controller.js');
const { isLoggedIn } = require('../lib/auth');
const photoPlayerstatisticsController = require('../controllers/photoPlayerstatistics.controller.js');

//viws players
router.get('/', isLoggedIn, playerstatisticsController.getListPlayerstatistics);
router.post('/playerstatistics', isLoggedIn, playerstatisticsController.postPlayerstatistic);
router.get('/add', isLoggedIn, playerstatisticsController.getAddPlayerstatistics);
router.get('/list-playerstatistics', isLoggedIn,playerstatisticsController.getListPlayerstatistics);
router.get('/delete-playerstatistics/:idstats', isLoggedIn, playerstatisticsController.deletePlayerstatistic);
router.get('/edit-playerstatistics/:idstats', isLoggedIn, playerstatisticsController.getPlayerstatistic);
router.post('/edit-playerstatistics/:idstats',isLoggedIn, playerstatisticsController.updatePlayerstatistic);



//views photo
router.post('/photo-playerstatistic/:idstats', photoPlayerstatisticsController.updatePhoto);

module.exports = router;