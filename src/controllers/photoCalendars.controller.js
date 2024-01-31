const pool = require("../config/database.sql");
const calendars = require("../models/calendar.model");
const { isLoggedIn } = require('../lib/auth');

const photoCalendar = {};

photoCalendar.updatePhoto = async (req, res) => {
    const { id } = req.params;
    let sampleFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0 ) {
        req.flash('message', 'No has ingresado una foto')
        return res.status(400).redirect('/calendars');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/../public/images/img-calendar/' + sampleFile.name;

    console.log(sampleFile);

    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
        pool.query('UPDATE calendars SET photo = ? WHERE id = ?', [sampleFile.name, id])
        req.flash('success', 'Foto agregada actualizado');
        res.redirect('/calendars');

    });

};
module.exports = photoCalendar