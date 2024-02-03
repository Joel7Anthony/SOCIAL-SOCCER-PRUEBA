const express = require('express');
const router = express.Router();
const comunicationsController = require('../controllers/comunications.controller');
//const { isLoggedIn } = require('../lib/auth');
const photoComunicationsController = require('../controllers/photoComunications.controller')

//viws comunication
router.get('/',  comunicationsController.getListComunications);
router.post('/comunications', comunicationsController.postComunication);
router.get('/add',  comunicationsController.getAddComunications);
router.get('/list-comunications', comunicationsController.getListComunications);
router.get('/delete-comunications/:id', comunicationsController.deleteComunication);
router.get('/edit-comunications/:id', comunicationsController.getComunication);
router.post('/edit-comunications/:id', comunicationsController.updateComunication);



//views photo
router.post('/photo-comunication/:id',  photoComunicationsController.updatePhoto);

module.exports = router;