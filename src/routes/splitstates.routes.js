const express = require('express');
const router = express.Router();
const splitstatesModel = require('../models/splitstate.model');
const { isLoggedIn } = require('../lib/auth');
const photoSplitstatesModel = require('../models/photoSplitstates.model');

//viws calendars
router.get('/', isLoggedIn, splitstatesController.getListSplitstates);
router.post('/splitstates', isLoggedIn,splitstatesController.postSplitstate);
router.get('/add', isLoggedIn,splitstatesController.getAddSplitstates);
router.get('/list-splitstates', isLoggedIn, splitstatesController.getListSplitstates);
router.get('/delete-splitstates/:id', isLoggedIn, splitstatesController.deleteSplitstate);
router.get('/edit-splitstates/:id', isLoggedIn,splitstatesController.getSplitstate);
router.post('/edit-splitstates/:id', isLoggedIn,splitstatesController.updateSplitstate);



//views photo

module.exports = router;