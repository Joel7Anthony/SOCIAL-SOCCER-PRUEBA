const pool = require("../config/database.sql");
const positions = require("../models/position.model");

const Positions = {};
//Conseguir Lista
Positions.getListPositions = async (req, res) => {
    const positions = await pool.query('SELECT *FROM position');
    res.render('Pages/position/list-positions', { positions });
};
//Publicar
Positions.postPosition = async (req, res) => {
    const {
        namePosition, descripcionPosition, localPosition, imagePosition
    } = req.body;
    const newLink = {
        namePosition, descripcionPosition, localPosition, imagePosition
    };
    await pool.query('INSERT INTO positions set ?'[newLink]);
    //flash
    req.flash('succes', 'Posición agregada correctamente');
    res.redirect("/positions/list-positions");
};
//Eliminar
Positions.deletePosition = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM positions WHERE ID = ?', [id]);
    req.flash('succes', 'Posición eliminada correctamente');
    res.redirect("/positions/list-positions");
}
//Editar
Positions.getPosition = async (req, res) => {
    const { id } = req.params;
    const position = await pool.query('SELECT * FROM positions WHERE id = ?', [id]);
    res.render('Positions/position/edit-positions', { position: position[0] });
};

//Actualizar
Positions.updatePosition = async (req, res) => {
    const { id } = req.params;
    const { namePosition, descripcionPosition, localPosition, imagePosition
    } = req.body;
    const newLink = {
        namePosition, descripcionPosition, localPosition, imagePosition
    };
    console.log({ id, newLink })
    await pool.query('UPDATE positions set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Posición editada correctamente');
    res.redirect('/positions/list-positions');
};
//Agregar
Positions.getAddPositions = async (req, res) => {
    const positions = await pool.query('SELECT * FROM positions')
    res.render('Positions/position/positions', { positions });
};
//views photo
module.exports = Positions;