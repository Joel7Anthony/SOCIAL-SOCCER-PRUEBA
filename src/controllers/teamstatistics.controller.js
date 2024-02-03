
const pool = require("../config/database.sql");
const teamstatistics = require("../models/teamstatitic.model");

const Teamstatistics = {};
Teamstatistics.getListTeamstatistics = async(req, res) => {
    const teamstatistics = await pool.query('SELECT * FROM teamstatistics');
    res.render('Pages/teamstatistic/list-teamstatistics', {teamstatistics});
};

Teamstatistics.getAddTeamstatistics = async (req, res) => {
    res.render('Pages/teamstatistic/teamstatistics');
};


Teamstatistics.postTeamstatistic = async(req, res) => {
    const {
        league_position, goles, foundation_date, logo, number_players
    } = req.body;
    const newLink = {
        league_position, goles, foundation_date, logo, number_players
    };
    await pool.query('INSERT INTO teamstatistics set ? ', {newLink});
    req.flash('success','Agregado correctamente');
    res.redirect('/teamstatistics/list-teamstatistics');
}

//Eliminar//
Teamstatistics.deleteTeamstatistic = async(req, res) => {
    const {id} = req.parans;
    await pool.query('DELETE FROM teamstatistics WHERE ID = ? ', {id});
    req.flash('success','Eliminado correctamente');
    res.redirect('teamstatistics/list-teamstatistics');
}

//actualizar//
Teamstatistics.getTeamstatistic = async(req, res) => {
    const {id} = req.parans;
    const teamstatistics = await pool.query('DELETE FROM teamstatistics WHERE ID - ? ', {id});
    res.render('Pages/teamstatistics/edit-teamstatistics', {teamstatistics: teamstatistics [0]});
}

//se mostrara actualizado en la lista//
Teamstatistics.updateTeamstatistic = async(req, res) => {
    const {id} = req.parans;
    const {
        league_position, goles, foundation_date, logo, number_players
    } = req.body;
    const newLink = {
        league_position, goles, foundation_date, logo, number_players
    };
    console.log({id, newLink})
    await pool.query('UPDATE teamstatistics set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Editado correctamente');
    res.redirect('/teamstatistics/list-teamstatistics'); 
}

    


module.exports = Teamstatistics;