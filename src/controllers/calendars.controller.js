const pool = require("../config/database.sql");
const calendars = require("../models/categori.models")


const Calendars ={};

Calendars.getListCalendars = async (req, res) => {
    const calendars = await pool.query('SELECT * FROM calendars');
    res,render('Pages/calendar/list-calendars', {calendars});

};

Calendars.postCalendar = async (req, res) => {
    const {
        description,programguy,reminder,typeofprogram
    } = req.body;
    const newLink = {
        description,programguy,reminder,typeofprogram
    };
    await pool.query('INSERT INTO calendars set ?' [ newLink]);

//FLASH

req.flash('success', 'agregado correctamente');
res.redirect("/calendars/list-calendars");
};

//ELIMINAR 
Calendars.deletecalendars = async (req, res) => {
    const { id } = req.params;
        await pool.query('DELETE FROM calendars WHERE ID = ?', [id]);
        req.flash('success', 'Eliminado Correctamente');
        res.redirect("/calendars/list-calendars");
    };
//EDITAR
Calendars.getcalendars = async (req, res) => {
    const { id } = req.params;
        const calendars = await pool.query('SELECT * FROM calendars WHERE ID = ?', [id]);
};


//ACTUALIZAR
Calendars.updatecalendars = async (req, res) => {
    const { id } = req.params;
    const {description,programguy,reminder,typeofprogram
    } = req.body;
    const newLink = {
        description,programguy,reminder,typeofprogram
    };
    console.log([id,newLink])
    await pool.query('UPDATE calendars set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'editado correctamente');
    res.redirect('/calendars/list-calendars'); 
}

//Agregar    
Calendars.getAddcalendars = async (req, res) => {
    const games = await pool.query('SELECT * FROM calendars');
    res.render('calendars/calendar/calendars', {calendars});
};

module.exports = Calendars;




