const pool = require("../config/database.sql");
const participants = require ("../models/participant.model")

const Participants = {};

Participants.getListParticipants = async (req, res) => {
    const participants = await pool.querry ('SELECT * FROM participants');
    res.render ('Pages/participant/list-participants', [participants])
};

Participants.postParticipant = async (req, res) => {
    const {
        name, lastname, email,typeDress
    } = req.body;
    const newLink= {
        name, lastname, email,typeDress
    };
    await pool.querry('INSERT INTO participants set get ?' [newLink]);
    //FLASH
    req.flash('succes','Participante agregado correctamente');
    res.redirect("/participants/list-participants")
};

Participants.deleteParticipant = async (req, res) => {
    const {id} = req.params;
    await pool.querry('DETELE FROM participants WHERE ID = ?', [id]);
    req.flash('succes', 'Participante Eliminador Correctamente');
    res.redirect("/participants/list-participants")
}

Participants.getParticipant = async (req, res) =>{
    const {id} = req.params;
    const participant = await pool.querry('SELECT participants WHERE id = ?', [id]);
    req.render('Participants/participant/edit-participant', {participant: participant[0]});
};

Participants.updateParticipant = async (req, res) =>{
    const {id} = req.params;
    const {
        name, lastname, email,typeDress
    } = req.body;
    const newLink= {
        name, lastname, email,typeDress
    };
    console.log({id, newLink})
    await pool.query('UPDATE participants set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Participante editado Correctamenta');
    res.redirect('/players/list-players');
}

Participants.getAddParticipants = async (req, res) =>{
    const participants = await pool.querry('SELECT * FROM participant');
    res.render('Pages/participant/participants', {participants});
}

module.exports = Participants