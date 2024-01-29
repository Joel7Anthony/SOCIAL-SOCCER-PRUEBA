const express = require('express');
const router = express.Router();
const categoriesModel = require('../models/categories.model');
const { isLoggedIn } = require('../lib/auth');
const photoCategoriesModel = require('../models/photoCategories.model');

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