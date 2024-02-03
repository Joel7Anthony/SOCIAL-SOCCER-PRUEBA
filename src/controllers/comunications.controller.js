const pool = require("../config/database.sql");
const comunications = require("../models/comunication.model");

const Comunications = {};


//Conseguir lista De comunicado 
Comunications.getListComunications = async (req, res) => {
  const comunications = await pool.query('SELECT * FROM  comunications');
  res.render('Pages/comunication/list-comunications', { comunications })
};

//Agregar 
Comunications.getAddComunications = async (req, res) => {
  res.render('Pages/comunication/comunications')
};

//Publicar Comunicado 
Comunications.postComunication = async (req, res) => {
  const {
    title, newsdescription, president, newsimage, publicationdate, newsauthor
  } = req.body;
  const newLink = {
    title, newsdescription, president, newsimage, publicationdate, newsauthor
  };
  await pool.query('INSERT INTO comunications set ?', [newLink]);
  //Flash
  req.flash('success', 'Agregado Correctamenta');
  res.redirect("/comunications/list-comunications");
};

//Eliminar Publicado 
Comunications.deleteComunication = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM comunications WHERE ID = ?", [id]);
  req.flash('success', 'Eliminado');
  res.redirect("/comunications/list-comunications");
};

//Actualizar Comunicado 
Comunications.getComunication = async (req, res) => {
  const { id } = req.params;
  const comunication = await pool.query('SELECT * FROM comunications WHERE id = ?', [id]);
  res.render('Pages/comunication/edit-comunications', { comunication: comunication[0] });
};

//Se amostrara lo que se actualizao 
Comunications.updateComunication = async (req, res) => {
  const { id } = req.params;
  const { title, newsdescription, president, newsimage, publicationdate, newsauthor } = req.body;
  const newLink = {
    title, newsdescription, president, newsimage, publicationdate, newsauthor
  };
  console.log({ id, newLink });
  await pool.query("UPDATE comunications set ? WHERE id = ?", [newLink, id]);
  req.flash('success', 'Actualizado');
  res.redirect('/comunications/list-comunications');
};

module.exports = Comunications;