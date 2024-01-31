const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller');
const { isLoggedIn } = require('../lib/auth');

//viws calendars
router.get('/', isLoggedIn, categoriesController.getListCategories);
router.post('/categories', isLoggedIn,categoriesController.postCategori);
router.get('/add', isLoggedIn,categoriesController.getAddCategories);
router.get('/list-categories', isLoggedIn, categoriesController.getListCategories);
router.get('/delete-categories/:id', isLoggedIn, categoriesController.deleteCategori);
router.get('/edit-categories/:id', isLoggedIn,categoriesController.getCategori);
router.post('/edit-categories/:id', isLoggedIn,categoriesController.updateCategori);



//views photo


module.exports = router;