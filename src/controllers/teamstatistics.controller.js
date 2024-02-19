const pool = require("../config/database.sql");
const teamstatistics = require("../models/teamstatitic.model");
const { isLoggedIn } = require('../lib/auth');

const Teamstatistics = {};

//Censeguir lista
Teamstatistics.getListTeamstatistics = async (req, res) => {
    const teamstatistics = await pool.query('SELECT * FROM teamstatistics INNER JOIN teams');
    res.render('Pages/teamstatistic/list-teamstatistics', { teamstatistics });
};

//agregar
Teamstatistics.getAddTeamstatistics = async (req, res) => {
    const teams = await pool.query('SELECT * FROM  teams')
    res.render('Pages/teamstatistic/teamstatistics', { teams });
};

//Publicar
Teamstatistics.postTeamstatistic = async (req, res) => {
    const id = req.id
    const {
        league_position, goles, logo, foundation_date, number_players, country
    } = req.body;
    const newLink = {
        league_position,
        goles,
        logo,
        foundation_date,
        number_players,
        teamIdteams: country,
        userId: id
    };
    await pool.query('INSERT INTO teamstatistics set ? ', [newLink]);
    req.flash('success', 'Agregado correctamente');
    res.redirect('/teamstatistics/list-teamstatistics');
}

//Eliminar Publicado 
Teamstatistics.deleteTeamstatistic = async (req, res) => {
    const { idstatistic } = req.params;
    await pool.query("DELETE FROM teamstatistics WHERE idstatistic = ?", [idstatistic]);
    req.flash('success', 'Eliminado');
    res.redirect("/teamstatistics/list-teamstatistics");
};

//Actualizar Comunicado 
Teamstatistics.getTeamstatistic = async (req, res) => {
    const { idstatistic } = req.params;
    const teamstatistic = await pool.query('SELECT * FROM teamstatistics WHERE idstatistic = ?', [idstatistic]);
    res.render('Pages/teamstatistic/edit-teamstatistics', { teamstatistic: teamstatistic[0] });
};

//Se amostrara lo que se actualizao 
Teamstatistics.updateTeamstatistic = async (req, res) => {
    const { idstatistic } = req.params;
    const { league_position, goles, logo, foundation_date, number_players, country } = req.body;
    const newLink = {
        league_position,
        goles,
        logo,
        foundation_date,
        number_players,
        teamIdteams: country,
    };
    console.log({ idstatistic, newLink });
    await pool.query("UPDATE teamstatistics set ? WHERE idstatistic = ?", [newLink, idstatistic]);
    req.flash('success', 'Actualizado');
    res.redirect('/teamstatistics/list-teamstatistics');
};

module.exports = Teamstatistics;