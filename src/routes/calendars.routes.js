const express = require('express');
const router = express.Router();
const calendarsController = require('../controllers/calendars.controller');
const { isLoggedIn } = require('../lib/auth');
const photoCalendarsController = require('../controllers/photoCalendars.controller')

//viws calendars
router.get('/', isLoggedIn, calendarsController.getListCalendars);
router.post('/calendars', isLoggedIn,calendarsController.postCalendar);
router.get('/add', isLoggedIn,calendarsController.getAddCalendars);
router.get('/list-calendars', isLoggedIn, calendarsController.getListCalendars);
router.get('/delete-calendars/:id', isLoggedIn, calendarsController.deleteCalendar);
router.get('/edit-calendars/:id', isLoggedIn,calendarsController.getCalendar);
router.post('/edit-calendars/:id', isLoggedIn,calendarsController.updateCalendar);



//views photo
router.post('/photo-calendar/:id', isLoggedIn, photoCalendarsController.updatePhoto);

module.exports = router;