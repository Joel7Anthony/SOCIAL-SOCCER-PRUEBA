const pool = require("../config/database.sql");
const coahs = require("../models/coach.model");
const { isLoggedIn } = require('../lib/auth');

const photoCoach = {};

photoCoach.updatePhoto = async (req, res) => {
    const { idcoachs } = req.params;
    let sampleFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0 ) {
        req.flash('message', 'No ingresas la imagne')
        return res.status(400).redirect('/coachs');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/../public/images/img-coach/' + sampleFile.name;

    console.log(sampleFile);

    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
        pool.query('UPDATE coachs SET photocoach = ? WHERE idcoachs = ?', [sampleFile.name, idcoachs])
        req.flash('success', 'Foto actualizado');
        res.redirect('/coachs');

    });

};
module.exports = photoCoach