const express = require('express');
const router = express.Router();
const participantsController = require('../controllers/participant.controller');
const { isLoggedIn } = require('../lib/auth');

//viws calendars
router.get('/', isLoggedIn, participantsController.getListParticipants);
router.post('/participants', isLoggedIn,participantsController.postParticipant);
router.get('/add', isLoggedIn,participantsController.getAddParticipants);
router.get('/list-participants', isLoggedIn, participantsController.getListParticipants);
router.get('/delete-participants/:id', isLoggedIn, participantsController.deleteParticipant);
router.get('/edit-participants/:id', isLoggedIn,participantsController.getParticipant);
router.post('/edit-participants/:id', isLoggedIn,participantsController.updateParticipant);



//views photo

module.exports = router;