const pool = require("../config/database.sql");
const splitdetail = require("../models/splidetail.models")


const splitdetail ={};

splitdetail.getListsplitdetail = async (req, res) => {
    const calendars = await pool.query('SELECT * FROM splitdetail');
    res,render('Pages/splitdetail/list-splitdetails', {splitdetail});

};

splitdetail.postsplitdetail = async (req, res) => {
    const {
        description,programguy,reminder,typeofprogram
    } = req.body;
    const newLink = {
        description,programguy,reminder,typeofprogram
    };
    await pool.query('INSERT INTO splitdetail set ?' [ newLink]);

//FLASH

req.flash('success', 'agregado correctamente');
res.redirect("/splitdetail/list-splitdetails");
};

//ELIMINAR 
splitdetail.deletesplitdetail = async (req, res) => {
    const { id } = req.params;
        await pool.query('DELETE FROM splitdetail WHERE ID = ?', [id]);
        req.flash('success', 'Eliminado Correctamente');
        res.redirect("/splitdetail/splitdetail");
    };
//EDITAR
splitdetail.getsplitdetail = async (req, res) => {
    const { id } = req.params;
        const splitdetail = await pool.query('SELECT * FROM splitdetail WHERE ID = ?', [id]);
};


//ACTUALIZAR
splitdetail.updatesplitdetail = async (req, res) => {
    const { id } = req.params;
    const {description,programguy,reminder,typeofprogram
    } = req.body;
    const newLink = {
        description,programguy,reminder,typeofprogram
    };
    console.log([id,newLink])
    await pool.query('UPDATE splitdetail set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'editado correctamente');
    res.redirect('/splitdetail/splitdetail'); 
}

//Agregar    
splitdetail.getAddsplitdetail = async (req, res) => {
    const splitdetail = await pool.query('SELECT * FROM splitdetail');
    res.render('csplitdetails/splitdetail/splitdetails', {splitdetail});
};

module.exports = splitdetail;




