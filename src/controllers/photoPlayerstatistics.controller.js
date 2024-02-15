const pool = require("../config/database.sql");
const playerstatistics = require("../models/playerstatistic.model");
const { isLoggedIn } = require('../lib/auth');

const photoPlayerstatistics = {};

photoPlayerstatistics.updatePhoto = async (req, res) => {
    const { idstats } = req.params;
    let sampleFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0 ) {
        req.flash('message', 'No ingresas la imagne')
        return res.status(400).redirect('/playerstatistics');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/../public/images/img-playerstatistic/' + sampleFile.name;

    console.log(sampleFile);

    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
        pool.query('UPDATE playerstatistics SET photo = ? WHERE idstats = ?', [sampleFile.name, idstats])
        req.flash('success', 'Foto actualizado');
        res.redirect('/playerstatistics');

    });

};
module.exports = photoPlayerstatistics