const pool = require("../config/database.sql");
const games = require("../models/game.model");
const { isLoggedIn } = require('../lib/auth');

const photoGame = {};

photoGame.updatePhoto = async (req, res) => {
    const { id } = req.params;
    let sampleFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0 ) {
        req.flash('message', 'No ingresas la imagne')
        return res.status(400).redirect('/games');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/../public/images/img-game/' + sampleFile.name;

    console.log(sampleFile);

    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
        pool.query('UPDATE games SET escudo2 = ? WHERE id = ?', [sampleFile.name, id])
        req.flash('success', 'Foto actualizado');
        res.redirect('/games');

    });

};
module.exports = photoGame