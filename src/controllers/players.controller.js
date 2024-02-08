const pool = require("../config/database.sql");
const keys = require("../keys");
const players = require("../models/player.model");
const { isLoggedIn } = require('../lib/auth');
const Players = {};
const Teams = {};



Players.getListPlayers = async (req, res) => {
  const players = await pool.query('SELECT * FROM  players');
  res.render('Pages/player/list-players', { players });
};

Players.postPlayer = async (req, res) => {
  const {
    playername, age,birthdate,photo,tshirtnumber,position,positiondetail
  } = req.body;
  const newLink = {
    playername, age,birthdate,photo,tshirtnumber,position,positiondetail
  };
  await pool.query('INSERT INTO players set ?', [newLink]);
  //Flash
  req.flash('success', 'Jugador agregado Correctamenta');
  res.redirect("/players/list-players");
};

Players.deletePlayer = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM players WHERE ID = ?", [id]);
  req.flash('success', 'Jugador Eliminado correctamente');
  res.redirect("/players/list-players");
};



Players.getPlayer = async (req, res) => {
  const { id } = req.params;
  const player = await pool.query('SELECT * FROM players WHERE id = ?', [id]);
  res.render('Pages/player/edit-players', { player: player[0] });

};
Players.updatePlayer = async (req, res) => {
  const { id } = req.params;
  const { playername, age,birthdate,photo,tshirtnumber,position,positiondetail
  } = req.body;
  const newLink = {
    playername, age,birthdate,photo,tshirtnumber,position,positiondetail

  };
  console.log({ id, newLink })
  await pool.query('UPDATE players set ? WHERE id = ?', [newLink, id]);
  req.flash('success', 'Jugador editado Correctamenta');
  res.redirect('/players/list-players');
};


Players.getAddPlayers = async (req, res) => {
  const players = await pool.query('SELECT * FROM  players');
  res.render('Pages/player/players', { players });
};

module.exports = Players;
