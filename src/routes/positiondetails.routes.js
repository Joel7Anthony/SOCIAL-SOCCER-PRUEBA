const express = require('express');
const router = express.Router();
const positiondetailsModel = require('../models/positiondetail.model');
const { isLoggedIn } = require('../lib/auth');
const photoPositiondetailsModel = require('../models/photoPositiondetails.model');

//viws calendars
router.get('/', isLoggedIn, positiondetailsController.getListPositiondetails);
router.post('/positiondetails', isLoggedIn,positiondetailsController.postPositiondetail);
router.get('/add', isLoggedIn,positiondetailsController.getAddPositiondetails);
router.get('/list-positiondetails', isLoggedIn, positiondetailsController.getListPositiondetails);
router.get('/delete-positiondetails/:id', isLoggedIn, positiondetailsController.deletePositiondetail);
router.get('/edit-positiondetails/:id', isLoggedIn,positiondetailsController.getPositiondetail);
router.post('/edit-positiondetails/:id', isLoggedIn,positiondetailsController.updatePositiondetail);



//views photo

module.exports = router;




