const express = require('express');
const router = express.Router();
const ComunicationsController = require('../controllers/comunications.controller');
const { isLoggedIn } = require('../lib/auth');
const photoComunicationsController = require('../controllers/photoComunications.controller')

//viws comunication
router.get('/', isLoggedIn, comunicationsController.getListComunications);
router.post('/comunications', isLoggedIn,comunicationsController.postComunication);
router.get('/add', isLoggedIn, comunicationsController.getAddComunications);
router.get('/list-comunicationrs', isLoggedIn,comunicationsController.getListComunications);
router.get('/delete-comunications/:id', isLoggedIn,comunicationsController.deleteComunication);
router.get('/edit-comunications/:id', isLoggedIn,comunicationsController.getComunication);
router.post('/edit-comunications/:id', isLoggedIn,comunicationsController.updateComunication);



//views photo
router.post('/photo-comunication/:id', isLoggedIn, photoComunicationsController.updatePhoto);

module.exports = router;