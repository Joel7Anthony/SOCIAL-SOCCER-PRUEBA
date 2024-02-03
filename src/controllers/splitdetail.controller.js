const pool = require("../config/database.sql");
const splitdetails = require("../models/splitdetail.model")


const Splitdetails ={};

Splitdetails.getListSplitdetails = async (req, res) => {
    const calendars = await pool.query('SELECT * FROM splitdetails');
    res,render('Pages/splitdetail/list-splitdetails', {splitdetails});

};

Splitdetails.postSplitdetail = async (req, res) => {
    const {
        description,programguy,reminder,typeofprogram
    } = req.body;
    const newLink = {
        description,programguy,reminder,typeofprogram
    };
    await pool.query('INSERT INTO splitdetails set ?' [ newLink]);

//FLASH

req.flash('success', 'agregado correctamente');
res.redirect("/splitdetails/list-splitdetails");
};

//ELIMINAR 
Splitdetails.deleteSplitdetail = async (req, res) => {
    const { id } = req.params;
        await pool.query('DELETE FROM splitdetails WHERE ID = ?', [id]);
        req.flash('success', 'Eliminado Correctamente');
        res.redirect("/splitdetails/splitdetails");
    };
//EDITAR
Splitdetails.getSplitdetail = async (req, res) => {
    const { id } = req.params;
        const splitdetail = await pool.query('SELECT * FROM splitdetails WHERE ID = ?', [id]);
        res.render('Page/splitdetail/edit-splitdetails', {splitdetail:splitdetail[0]});
};


//ACTUALIZAR
Splitdetails.updateSplitdetail = async (req, res) => {
    const { id } = req.params;
    const {description,programguy,reminder,typeofprogram
    } = req.body;
    const newLink = {
        description,programguy,reminder,typeofprogram
    };
    console.log([id,newLink])
    await pool.query('UPDATE splitdetails set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'editado correctamente');
    res.redirect('/splitdetails/list-splitdetails'); 
}

//Agregar    
Splitdetails.getAddSplitdetails = async (req, res) => {
    const splitdetails = await pool.query('SELECT * FROM splitdetail');
    res.render('Pages/splitdetail/splitdetails', {splitdetails});
};

module.exports = Splitdetails;




