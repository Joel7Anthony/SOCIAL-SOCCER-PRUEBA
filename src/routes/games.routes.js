const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/games.controller');
const gamesModel = require('../models/game.model');
const { isLoggedIn } = require('../lib/auth');


//viws calendars
router.get('/', isLoggedIn, gamesController.getListGames);
router.post('/games', isLoggedIn,gamesController.postGame);
router.get('/add', isLoggedIn,gamesController.getAddGames);
router.get('/list-games', isLoggedIn, gamesController.getListGames);
router.get('/delete-games/:id', isLoggedIn, gamesController.deleteGame);
router.get('/edit-games/:id', isLoggedIn,gamesController.getGame);
router.post('/edit-games/:id', isLoggedIn,gamesController.updateGame);



//views photo
router.post('/photo-game/:id', isLoggedIn, photoGamesController.updatePhoto);

module.exports = router;