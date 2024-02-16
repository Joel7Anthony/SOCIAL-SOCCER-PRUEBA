const pool = require("../config/database.sql");
const playerstatistics = require("../models/playerstatistic.model");
const { isLoggedIn } = require('../lib/auth');
const teams = require("../models/team.model");

const Playerstatistics = {};

//Censeguir lista
Playerstatistics.getListPlayerstatistics = async (req, res) => {
    const playerstatistics = await pool.query('SELECT * FROM playerstatistics');
    res.render('Pages/playerstatistic/list-playerstatistics', { playerstatistics });
}; 

//agregar
Playerstatistics.getAddPlayerstatistics = async (req, res) => {
  const teams = await pool.query ('SELECT * FROM teams'); 
    res.render('Pages/playerstatistic/playerstatistics', {teams});
};

//Publicar
Playerstatistics.postPlayerstatistic = async (req, res) => {
  const id= req.user.id 
  const {
  country, name, physical, duels, shot, defense, pass, ability
    } = req.body;
    const newLink = { 
      teamIdteams:country,
      userId: id,
      name,
      physical,
      duels,
      shot,
      defense,
      pass,
      ability
    };
    await pool.query('INSERT INTO playerstatistics set ? ', [newLink]);
    req.flash('success', 'Agregado correctamente');
    res.redirect('/playerstatistics/list-playerstatistics');
}

//Eliminar Publicado 
Playerstatistics.deletePlayerstatistic = async (req, res) => {
    const { idstats } = req.params;
    await pool.query("DELETE FROM playerstatistics WHERE idstats = ?", [idstats]);
    req.flash('success', 'Eliminado');
    res.redirect("/playerstatistics/list-playerstatistics");
  };
  
  //Actualizar Comunicado 
  Playerstatistics.getPlayerstatistic = async (req, res) => { 
    const { idstats } = req.params;
    const playerstatistic = await pool.query('SELECT * FROM playerstatistics WHERE idstats = ?', [idstats]);
    res.render('Pages/playerstatistic/edit-playerstatistics', { playerstatistic: playerstatistic[0] });
  };
  
  //Se amostrara lo que se actualizao  
  Playerstatistics.updatePlayerstatistic = async (req, res) => {
    const { idstats } = req.params;
    const {name, physical, duels, shot, defense, pass, ability } = req.body;
    const newLink = {
        name, physical, duels, shot, defense, pass, ability
    };
    console.log({ idstats, newLink });
    await pool.query("UPDATE playerstatistics set ? WHERE idstats = ?", [newLink, idstats]);
    req.flash('success', 'Actualizado');
    res.redirect('/playerstatistics/list-playerstatistics');
  };

module.exports = Playerstatistics;