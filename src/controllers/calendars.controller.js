const pool = require("../config/database.sql");
const calendars = require("../models/categori.model")


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
        namegame, descripcionGame,locationGame,imageGame
    };
    await pool.query('INSERT INTO games set ?' [ newLink]);

//FLASH

req.flash('success', 'Partido agregado correctamente');
res.redirect("/games/list-games");
};

//ELIMINAR 
Calendars.deleteGame = async (req, res) => {
    const { id } = req.params;
        await pool.query('DELETE FROM games WHERE ID = ?', [id]);
        req.flash('success', 'Partido Eliminado Correctamente');
        res.redirect("/games/list-game");
    };
//EDITAR
Calendars.getGame = async (req, res) => {
    const { id } = req.params;
        const game = await pool.query('SELECT * FROM games WHere id = ?', [id]);
};


//ACTUALIZAR
Calendars.updateEgame = async (req, res) => {
    const { id } = req.params;
    const {namegame,descripcionGame,locationGame,imageGame
    } = req.body;
    const newLink = {
        namegame,descripcionGame,locationGame,imageGame
    };
    console.log([id,newLink])
    await pool.query('UPDATE games set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Partido editado correctamente');
    res.redirect('/games/list-games'); 
}

//Agregar    
Calendars.getAddGames = async (req, res) => {
    const games = await pool.query('SELECT * FROM games');
    res.render('Games/game/games', {games});
};

module.exports = Calendars;




