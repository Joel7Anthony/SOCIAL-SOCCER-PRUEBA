const { polygon } = require("leaflet");
const pool = require("../config/database.sql");
const positiondetails = require ("../models/positiondetail.model");

const Positiondetails = {};

//SE MUESTRA LA LISTA
Positiondetails.getListPositiondetails = async (req, res) => {
    const positiondetails = await pool.query('SELECT * FROM positiondetails');
    res.render('Pages/positiondetail/list-positiondetails', [positiondetails]);
};

//agregar
Positiondetails.getAddPositiondetails = async (req, res) => {
    const positiondetails = await pool.query('SELECT * FROM positiondetail');
    res.render('Pages/positiondetail/positiondetails', {positiondetails});
};

Positiondetails.postPositiondetail = async(req, res) => {
    const {
        archer, libero,center,carrilero,pivot,inside,flyer,midfielder,end,secondStriker
    } = req.body;
    const newLink = {
        archer, libero,center,carrilero,pivot,inside,flyer,midfielder,end,secondStriker
    };
    await pool.query('INSERT INTO positiondetails set ?', [newLink]);
    //FLASH
    req.flash('succes', 'Posicion actualizada');
    req.redirect("/positiondetails/list-positiondetails");
};

//Eliminar
Positiondetails.deletePositiondetail = async ( req, res) => {
    const {id} = req.params;
    await pool.query("DELETE FROM positiondetails WHERE ID = ?", [id]);
    req.flash('succes', 'Eliminado la posicion');
    req.redirect("/positiondetails/list-positiondetails");
};

//Actualizar en vista
Positiondetails.getPositiondetail = async (req,res) => {
    const {id} = req.params;
    const positiondetail = await pool.query('SELECT * FROM positiondetails WHERE id =?', [id]);
    res.render('Pages/positiondetail/edit-positiondetails', {positiondetail:positiondetail [0]});
};

//Actualizar contenido
Positiondetails.updatePositiondetail = async(req, res) => {
    const {id} = req.params;
    const { 
        archer, libero,center,carrilero,pivot,inside,flyer,midfielder,end,secondStriker
     } = req.body;
     const newLink = {
        archer, libero,center,carrilero,pivot,inside,flyer,midfielder,end,secondStriker
     };
     console.log({id, newLink});
     await pool.query("UPDATE positiondetails set ? WHERE id = ?", [newLink,id]);
     req.flash('success', 'Posicion actualizada');
     res.redirect('/positiondetails/list-positiondetails');
};

module.exports = Positiondetails