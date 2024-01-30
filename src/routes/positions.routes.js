const express = require('express');
const router = express.Router();
const positionsController = require('../controllers/position.controller');
const { isLoggedIn } = require('../lib/auth');

//viws calendars
router.get('/', isLoggedIn, positionsController.getListPositions);
router.post('/positions', isLoggedIn,positionsController.postPosition);
router.get('/add', isLoggedIn,positionsController.getAddPositions);
router.get('/list-positions', isLoggedIn, positionsController.getListPositions);
router.get('/delete-positions/:id', isLoggedIn, positionsController.deletePosition);
router.get('/edit-positions/:id', isLoggedIn,positionsController.getPosition);
router.post('/edit-positions/:id', isLoggedIn,positionsController.updatePosition);



//views photo

module.exports = router;