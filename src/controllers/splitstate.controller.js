const pool = require("../config/database.sql");
const splitstate = require("../models/splitstate.models")


const splitstate ={};

plitstate.getListsplitstate = async (req, res) => {
    const splitstate = await pool.query('SELECT * FROM splitstate');
    res,render('Pages/splitstate/list-splitstate', {splitstate});

};

splitstate.postsplitstate = async (req, res) => {
    const {
        description,programguy,reminder,typeofprogram
    } = req.body;
    const newLink = {
        description,programguy,reminder,typeofprogram
    };
    await pool.query('INSERT INTO splitstate set ?' [ newLink]);

//FLASH

req.flash('success', 'agregado correctamente');
res.redirect("/splitstate/list-splitstate");
};

//ELIMINAR 
splitstate.deletesplitstate = async (req, res) => {
    const { id } = req.params;
        await pool.query('DELETE FROM splitstate WHERE ID = ?', [id]);
        req.flash('success', 'Eliminado Correctamente');
        res.redirect("/splitstate/splitstate");
    };
//EDITAR
splitstate.getsplitstate = async (req, res) => {
    const { id } = req.params;
        const splitstate = await pool.query('SELECT * FROM splitstate WHERE ID = ?', [id]);
};


//ACTUALIZAR
splitstate.updatesplitstate = async (req, res) => {
    const { id } = req.params;
    const {description,programguy,reminder,typeofprogram
    } = req.body;
    const newLink = {
        description,programguy,reminder,typeofprogram
    };
    console.log([id,newLink])
    await pool.query('UPDATE splitstate set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'editado correctamente');
    res.redirect('/splitstate/splitstate'); 
}

//Agregar    
splitstate.getAddsplitstate = async (req, res) => {
    const splitstate = await pool.query('SELECT * FROM splitstate');
    res.render('splitstates/splitstate/splitstates', {splitstate});
};

module.exports = splitstate;




