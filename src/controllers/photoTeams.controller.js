const pool = require("../config/database.sql");
const teams = require("../models/team.model");
const { isLoggedIn } = require('../lib/auth');

const photoTeam = {};

photoTeam.updatePhoto = async (req, res) => {
    const { idteams } = req.params;
    let sampleFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0 ) {
        req.flash('message', 'No ingresas el logo')
        return res.status(400).redirect('/teams');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/../public/images/img-team/' + sampleFile.name;

    console.log(sampleFile);

    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
        pool.query('UPDATE teams SET photo = ? WHERE idteams = ?', [sampleFile.name, idteams])
        req.flash('success', 'Escudo actualizado');
        res.redirect('/teams');

    });

};
module.exports = photoTeam