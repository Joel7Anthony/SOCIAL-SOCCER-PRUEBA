const express = require('express');
const router = express.Router();
const coachsController = require('../controllers/coachs.controller.js');
//const { isLoggedIn } = require('../lib/auth');
const photocoachsController = require('../controllers/photocoachs.controller.js/index.js')

//viws comunication
router.get('/',  coachsController.getListCoachs);
router.post('/coachs', coachsController.postComunication);
router.get('/add',  coachsController.getAddCoachs);
router.get('/list-coachs', coachsController.getListCoachs);
router.get('/delete-coachs/:id', coachsController.deleteCoach);
router.get('/edit-coachs/:id', coachsController.getCoach);
router.post('/edit-coachs/:id', coachsController.updateCoach);



//views photo
router.post('/photo-comunication/:id',  photocoachsController.updatePhoto);

module.exports = router;