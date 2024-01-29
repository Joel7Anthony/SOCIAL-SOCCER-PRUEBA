const express = require('express');
const router = express.Router();
const splitdetailsModel = require('../modelssplitdetail.model');
const { isLoggedIn } = require('../lib/auth');
const photoSplitdetailsModel = require('../models/Splitdetails.model');

//viws calendars
router.get('/', isLoggedIn, splitdetailsController.getListSplitdetails);
router.post('/splitdetails', isLoggedIn,splitdetailsController.postSplitdetail);
router.get('/add', isLoggedIn,splitdetailsController.getAddSplitdetails);
router.get('/list-splitdetails', isLoggedIn, splitdetailsController.getListSplitdetails);
router.get('/delete-splitdetails/:id', isLoggedIn, splitdetailsController.deleteSplitdetail);
router.get('/edit-splitdetails/:id', isLoggedIn,splitdetailsController.getSplitdetail);
router.post('/edit-splitdetails/:id', isLoggedIn,splitdetailsController.updateSplitdetail);



//views photo


module.exports = router;