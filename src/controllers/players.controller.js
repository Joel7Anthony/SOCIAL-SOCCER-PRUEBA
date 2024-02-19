const pool = require("../config/database.sql");
const keys = require("../keys");
const players = require("../models/player.model");
const { isLoggedIn } = require('../lib/auth');
const teams = require("../models/team.model");

const Players = {};



Players.getListPlayers = async (req, res) => {
  const players = await pool.query('SELECT * FROM  players INNER JOIN teams');
  res.render('Pages/player/list-players', { players });
};


//agregar
Players.getAddPlayers = async (req, res) => {
  const teams = await pool.query('SELECT * FROM  teams');
  res.render('Pages/player/players', { teams });
};


Players.postPlayer = async (req, res) => {
  const id = req.user.id
  const {
    playername, age, birthdate, photo, tshirtnumber, position, positiondetail, country
  } = req.body;

  const newLink = {
    playername,
    age,
    birthdate,
    photo,
    tshirtnumber,
    position,
    positiondetail,
    teamIdteams: country,
    userId: id

  };
  await pool.query('INSERT INTO players set ?', [newLink]);
  //Flash
  req.flash('success', 'Jugador agregado Correctamenta');
  res.redirect("/players/list-players");
};

Players.deletePlayer = async (req, res) => {
  const { idplayers } = req.params;
  await pool.query("DELETE FROM players WHERE idplayers = ?", [idplayers]);
  req.flash('success', 'Jugador Eliminado correctamente');
  res.redirect("/players/list-players");
};



Players.getPlayer = async (req, res) => {
  const { idplayers } = req.params;
  const player = await pool.query('SELECT * FROM players WHERE idplayers = ?', [idplayers]);
  res.render('Pages/player/edit-players', { player: player[0] });

};
Players.updatePlayer = async (req, res) => {
  const { idplayers } = req.params;
  const { playername, age, birthdate, photo, tshirtnumber, position, positiondetail
  } = req.body;
  const newLink = {
    playername,
    age,
    birthdate,
    photo,
    tshirtnumber,
    position,
    positiondetail

  };
  console.log({ idplayers, newLink })
  await pool.query('UPDATE players set ? WHERE idplayers = ?', [newLink, idplayers]);
  req.flash('success', 'Jugador editado Correctamenta');
  res.redirect('/players/list-players'); 
};


module.exports = Players;
