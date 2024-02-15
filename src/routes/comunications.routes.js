const express = require('express');
const router = express.Router();
const comunicationsController = require('../controllers/comunications.controller');
const { isLoggedIn } = require('../lib/auth');
const photoComunicationsController = require('../controllers/photoComunications.controller')

//viws comunication
router.get('/',isLoggedIn,  comunicationsController.getListComunications);
router.post('/comunications',isLoggedIn, comunicationsController.postComunication);
router.get('/add',isLoggedIn, comunicationsController.getAddComunications);
router.get('/list-comunications',isLoggedIn,comunicationsController.getListComunications);
router.get('/delete-comunications/:idcomunica',isLoggedIn, comunicationsController.deleteComunication);
router.get('/edit-comunications/:idcomunica',isLoggedIn, comunicationsController.getComunication);
router.post('/edit-comunications/:idcomunica',isLoggedIn, comunicationsController.updateComunication);



//views photo
router.post('/photo-comunication/:idcomunica', isLoggedIn, photoComunicationsController.updatePhoto);

module.exports = router;