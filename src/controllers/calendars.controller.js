const pool = require("../config/dataBase.sql");
const games = require("../models/game.model");

const Games ={};

Games.getListGames = async (req, res) => {
    const games = await pool.query('SELECT * FROM games');
    res,render('Pages/game/list-games', {games});

};

Games.postGame = async (req, res) => {
    const {
        namegame, descripcionGame,locationGame,imageGame
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
Games.deleteGame = async (req, res) => {
    const { id } = req.params;
        await pool.query('DELETE FROM games WHERE ID = ?', [id]);
        req.flash('success', 'Partido Eliminado Correctamente');
        res.redirect("/games/list-game");
    };
//EDITAR
Games.getGame = async (req, res) => {
    const { id } = req.params;
        const game = await pool.query('SELECT * FROM games WHere id = ?', [id]);
};


//ACTUALIZAR
Games.updateEgame = async (req, res) => {
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
Games.getAddGames = async (req, res) => {
    const games = await pool.query('SELECT * FROM games');
    res.render('Games/game/games', {games});
};

module.exports = Games;




