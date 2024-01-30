const pool = require("../config/database.sql");
const communications = require("../models/communication.model");
const keys = require("../keys"); 
const Communications = {};


//Conseguir lista De comunicado 
Communications.getListComunications =  async(req, res) => {
    //res.render("pages/users/list");
    const communications = await pool.query('SELECT * FROM  comunications');  
    res.render('pages/comunications/list', {comunications})
};

//Agregar 
Communications.getAddComunications = async (req, res) => {
  res.render('Pages/comunication/comunications')
};

//Publicar Comunicado 
Communications.postComunications = async (req, res) => {
  const {
    newsdescription,  president, newsimage, publicationdate, newsauthor
  } = req.body;
  const newLink = {
    newsdescription, president, newsimage, publicationdate, newsauthor
  };
  await pool.query('INSERT INTO comunications set ?', [newLink]);
   //Flash
  req.flash('success','Agregado Correctamenta');
  res.redirect("/comunications/list-comunications");
};

//Eliminar Publicado 
Communications.deleteCommunications = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM comunications WHERE ID = ?", [id]);
  req.flash('success', 'Eliminado');
  res.redirect("/comunications/list-comunications");
};

//Actualizar Comunicado 
Communications.getComunications = async (req, res) => {
  const { id } = req.params;
  const user = await pool.query('SELECT * FROM comunications WHERE id = ?', [id]);
  req.flash('success', 'bien');
  res.render('pages/comunications/edit', { user: user[0] });
};

//Se amostrara lo que se actualizao 
Communications.updateComunications = async (req, res) => {
  const { id } = req.params;
  const { newsdescription,  president, newsimage, publicationdate, newsauthor } = req.body;
  const newComunications = {
    newsdescription,  president, newsimage, publicationdate, newsauthor
  };
  await pool.query("UPDATE comunications set ? WHERE id = ?", [newComunications, id]);
  req.flash('success', 'Actualizado');
  res.redirect('/comunications/list-comunications');
};

module.exports = Communications;







