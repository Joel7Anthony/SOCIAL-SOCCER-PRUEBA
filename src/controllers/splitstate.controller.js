const pool = require("../config/database.sql");
const splitstates = require("../models/splitstate.model")


const Splitstates = {};

Splitstates.getListSplitstates = async (req, res) => {
    const splitstates = await pool.query('SELECT * FROM splitstates');
    res, render('Pages/splitstate/list-splitstates', { splitstates });

};

Splitstates.postSplitstate = async (req, res) => {
    const {
        description, programguy, reminder, typeofprogram
    } = req.body;
    const newLink = {
        description, programguy, reminder, typeofprogram
    };
    await pool.query('INSERT INTO splitstates set ?'[newLink]);

    //FLASH
    req.flash('success', 'agregado correctamente');
    res.redirect("/splitstates/list-splitstates");
};

//ELIMINAR 
Splitstates.deleteSplitstate = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM splitstates WHERE ID = ?', [id]);
    req.flash('success', 'Eliminado Correctamente');
    res.redirect("/splitstates/list-splitstates");
};
//EDITAR
Splitstates.getSplitstate = async (req, res) => {
    const { id } = req.params;
    const splitstate = await pool.query('SELECT * FROM splitstates WHERE id = ?', [id]);
    res.render('Splitstes/splitste/edit-splitstes', { splitste: splitstate[0] });
};


//ACTUALIZAR
Splitstates.updateSplitstate = async (req, res) => {
    const { id } = req.params;
    const { description, programguy, reminder, typeofprogram
    } = req.body;
    const newLink = {
        description, programguy, reminder, typeofprogram
    };
    console.log([id, newLink])
    await pool.query('UPDATE splitstates set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'editado correctamente');
    res.redirect('/splitstates/list-splitstates');
}

//Agregar    
Splitstates.getAddSplitstates = async (req, res) => {
    const splitstate = await pool.query('SELECT * FROM splitstates');
    res.render('Splitstates/splitstate/splitstates', { splitstate });
};

module.exports = Splitstates;




