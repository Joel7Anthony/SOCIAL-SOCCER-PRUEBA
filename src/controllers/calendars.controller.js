const pool = require("../config/database.sql");
const calendars = require("../models/calendar.model");


const Calnedars = {};

Calnedars.getListCalendars = async ( req, res) => {
    const calendars = await pool.query('SELECT * FROM calendars');
    res.render('Pages/calendar/list-calendars', {calendars});
};

Calnedars.getAddCalendars = async ( req, res) => {
    res.render('Pages/calendar/calendars')
};

Calnedars.postCalendar = async( req, res) => {
    const {
        description, programguy, reminder, typeofprogram
    } = req.body;
    const newLink = {
        description, programguy,reminder,typeofprogram
    };
    await pool.query('INSERT INTO calendars set ?' [newLink]);
    //Flash
    req.flash('success', 'Agrefado Corectamente');
    res.redirect("calendars/list-calendars");
}