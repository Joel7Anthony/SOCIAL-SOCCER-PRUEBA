const pool = require("../config/database.sql");
const teamstatistics = require("../models/teamstatitic.model");

const Teamstatistics = {};

//Censeguir lista
Teamstatistics.getListTeamstatistics = async (req, res) => {
    const teamstatistics = await pool.query('SELECT * FROM teamstatistics');
    res.render('Pages/teamstatistic/list-teamstatistics', { teamstatistics });
};

//agregar
Teamstatistics.getAddTeamstatistics = async (req, res) => {
    res.render('Pages/teamstatistic/teamstatistics');
};

//Publicar
Teamstatistics.postTeamstatistic = async (req, res) => {
    const {
        league_position, goles, logo, foundation_date, number_players
    } = req.body;
    const newLink = {
        league_position, goles, logo, foundation_date, number_players
    };
    await pool.query('INSERT INTO teamstatistics set ? ', [newLink]);
    req.flash('success', 'Agregado correctamente');
    res.redirect('/teamstatistics/list-teamstatistics');
}

//Eliminar Publicado 
Teamstatistics.deleteTeamstatistic = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM teamstatistics WHERE ID = ?", [id]);
    req.flash('success', 'Eliminado');
    res.redirect("/teamstatistics/list-teamstatistics");
  };
  
  //Actualizar Comunicado 
  Teamstatistics.getTeamstatistic = async (req, res) => {
    const { id } = req.params;
    const teamstatistic = await pool.query('SELECT * FROM teamstatistics WHERE id = ?', [id]);
    res.render('Pages/teamstatistic/edit-teamstatistics', { teamstatistic: teamstatistic[0] });
  };
  
  //Se amostrara lo que se actualizao 
  Teamstatistics.updateTeamstatistic = async (req, res) => {
    const { id } = req.params;
    const { league_position, goles, logo, foundation_date, number_players } = req.body;
    const newLink = {
        league_position, goles, logo, foundation_date, number_players
    };
    console.log({ id, newLink });
    await pool.query("UPDATE teamstatistics set ? WHERE id = ?", [newLink, id]);
    req.flash('success', 'Actualizado');
    res.redirect('/teamstatistics/list-teamstatistics');
  };

module.exports = Teamstatistics;