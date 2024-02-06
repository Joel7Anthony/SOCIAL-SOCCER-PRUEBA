const pool = require("../config/database.sql");
const playerstatistics = require("../models/playerstatistic.model");

const Playerstatistics = {};

//Censeguir lista
Playerstatistics.getListPlayerstatistics = async (req, res) => {
    const playerstatistics = await pool.query('SELECT * FROM playerstatistics');
    res.render('Pages/playerstatistic/list-playerstatistics', { playerstatistics });
};

//agregar
Playerstatistics.getAddPlayerstatistics = async (req, res) => {
    res.render('Pages/playerstatistic/playerstatistics');
};

//Publicar
Playerstatistics.postPlayerstatistic = async (req, res) => {
    const {
       attacK, speed, shootingpower, endurance, ballControl, assault, shortpass, passover, dribbling, agility, balance
    } = req.body;
    const newLink = {
        attacK, speed, shootingpower, endurance, ballControl, assault, shortpass, passover, dribbling, agility, balance
    };
    await pool.query('INSERT INTO playerstatistics set ? ', [newLink]);
    req.flash('success', 'Agregado correctamente');
    res.redirect('/playerstatistics/list-playerstatistics');
}

//Eliminar Publicado 
Playerstatistics.deletePlayerstatistic = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM playerstatistics WHERE ID = ?", [id]);
    req.flash('success', 'Eliminado');
    res.redirect("/playerstatistics/list-playerstatistics");
  };
  
  //Actualizar Comunicado 
  Playerstatistics.getPlayerstatistic = async (req, res) => {
    const { id } = req.params;
    const playerstatistic = await pool.query('SELECT * FROM playerstatistics WHERE id = ?', [id]);
    res.render('Pages/playerstatistic/edit-playerstatistics', { playerstatistic: playerstatistic[0] });
  };
  
  //Se amostrara lo que se actualizao 
  Playerstatistics.updatePlayerstatistic = async (req, res) => {
    const { id } = req.params;
    const {attacK, speed, shootingpower, endurance, ballControl, assault, shortpass, passover, dribbling, agility, balance } = req.body;
    const newLink = {
        attacK, speed, shootingpower, endurance, ballControl, assault, shortpass, passover, dribbling, agility, balance
    };
    console.log({ id, newLink });
    await pool.query("UPDATE playerstatistics set ? WHERE id = ?", [newLink, id]);
    req.flash('success', 'Actualizado');
    res.redirect('/playerstatistics/list-playerstatistics');
  };

module.exports = Playerstatistics;