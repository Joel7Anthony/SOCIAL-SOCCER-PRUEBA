const pool = require("../config/database.sql");
const comunications = require("../models/comunication.model");
//const { isLoggedIn } = require('../lib/auth');

const photoComunication = {};

photoComunication.updatePhoto = async (req, res) => {
    const { id } = req.params;
    let sampleFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0 ) {
        req.flash('message', 'No ingresas la imagne')
        return res.status(400).redirect('/comunications');
    }
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/../public/images/img-comunication/' + sampleFile.name;

    console.log(sampleFile);

    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
        pool.query('UPDATE comunications SET logo = ? WHERE id = ?', [sampleFile.name, id])
        req.flash('success', 'Foto actualizado');
        res.redirect('/comunications');

    });

};
module.exports = photoComunication