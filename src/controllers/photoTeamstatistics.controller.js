const pool = require("../config/database.sql");
const teamstatistics = require("../models/teamstatitic.model");
const { isLoggedIn } = require('../lib/auth');

const photoTeamstatistics = {};

photoTeamstatistics.updatePhoto = async (req, res) => {
    const { id } = req.params;
    let sampleFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0 ) {
        req.flash('message', 'No ingresas la imagne')
        return res.status(400).redirect('/teamstatistics');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/../public/images/img-teamstatistics/' + sampleFile.name;

    console.log(sampleFile);

    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
        pool.query('UPDATE teamstatistics SET logo = ? WHERE id = ?', [sampleFile.name, id])
        req.flash('success', 'Foto actualizado');
        res.redirect('/teamstatistics');

    });

};
module.exports = photoTeamstatistics