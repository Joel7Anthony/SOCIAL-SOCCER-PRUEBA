const pool = require("../config/database.sql");
const comunications = require("../models/comunication.model");
const { isLoggedIn } = require('../lib/auth');

const Comunications = {};


//Conseguir lista De comunicado 
Comunications.getListComunications = async (req, res) => {
  const comunications = await pool.query('SELECT * FROM  comunications');
  res.render('Pages/comunication/list-comunications', { comunications })
}; 

//Agregar 
Comunications.getAddComunications = async (req, res) => {
  const teams = await pool.query('SELECT * FROM  teams')
  res.render('Pages/comunication/comunications', {teams})
};

//Publicar Comunicado 
Comunications.postComunication = async (req, res) => {
  const id = req.id
  const {
    title, newsdescription, president, newsimage, publicationdate, newsauthor, country
  } = req.body;
  const newLink = {
    title, 
    newsdescription, 
    president, 
    newsimage, 
    publicationdate, 
    newsauthor, 
    teamIdteams:country,
    userId: id
  };
  await pool.query('INSERT INTO comunications set ?', [newLink]);
  //Flash
  req.flash('success', 'Agregado Correctamenta');
  res.redirect("/comunications/list-comunications");
};

//Eliminar Publicado 
Comunications.deleteComunication = async (req, res) => {
  const { idcomunica } = req.params;
  await pool.query("DELETE FROM comunications WHERE idcomunica = ?", [idcomunica]);
  req.flash('success', 'Eliminado');
  res.redirect("/comunications/list-comunications");
};

//Actualizar Comunicado 
Comunications.getComunication = async (req, res) => {
  const { idcomunica } = req.params;
  const comunication = await pool.query('SELECT * FROM comunications WHERE idcomunica = ?', [idcomunica]);
  res.render('Pages/comunication/edit-comunications', { comunication: comunication[0] });
};

//Se amostrara lo que se actualizao 
Comunications.updateComunication = async (req, res) => {
  const { idcomunica } = req.params;
  const { title, newsdescription, president, newsimage, publicationdate, newsauthor, country } = req.body;
  const newLink = {
    title, newsdescription, president, newsimage, publicationdate, newsauthor ,teamIdteams:country,
  };
  console.log({ idcomunica, newLink });
  await pool.query("UPDATE comunications set ? WHERE idcomunica = ?", [newLink, idcomunica]);
  req.flash('success', 'Actualizado');
  res.redirect('/comunications/list-comunications');
};

module.exports = Comunications;