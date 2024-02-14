const express = require('express');
const router = express.Router();
const coachsController = require('../controllers/coachs.controller');
const { isLoggedIn } = require('../lib/auth');
const photoCoahsController = require('../controllers/photoCoahs.controller.js')

//viws comunication
router.get('/', isLoggedIn, coachsController.getListCoachs);
router.post('/coachs',isLoggedIn, coachsController.postCoach);
router.get('/add',isLoggedIn,  coachsController.getAddCoachs);
router.get('/list-coachs',isLoggedIn, coachsController.getListCoachs);
router.get('/delete-coachs/:idcoachs',isLoggedIn, coachsController.deleteCoach);
router.get('/edit-coachs/:idcoachs',isLoggedIn, coachsController.getCoach);
router.post('/edit-coachs/:idcoachs',isLoggedIn, coachsController.updateCoach);


//views photo
router.post('/photo-coach/:idcoachs', isLoggedIn, photoCoahsController.updatePhoto);

module.exports = router;