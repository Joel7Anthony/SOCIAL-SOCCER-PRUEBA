const pool = require("../config/database.sql");
const games = require("../models/game.model");

const Games = {};

//Conseguir lista 
Games.getListGames = async (req, res) => {
    const games = await pool.query('SELECT * FROM games');
    res.render('Pages/game/list-games', { games });
};


//Publicar 
Games.postGame = async (req, res) => {
    const id=req.user.id
    const {
        escudo1, team1, team2,date,escudo2
    } = req.body;
    const newLink = {
        escudo1, 
        team1, 
        team2,
        date,
        escudo2,
        userId: id
    };
    await pool.query('INSERT INTO games set ?', [newLink]);
    //FLASH
    req.flash('success', 'Partido agregado correctamente');
    res.redirect("/games/list-games");
};

//Eliminar
Games.deleteGame = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM games WHERE ID = ?', [id]);
    req.flash('success', 'Partido Eliminado Correctamente');
    res.redirect("/games/list-games");
};

//editar
Games.getGame = async (req, res) => {
    const { id } = req.params;
    const game = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
    res.render('Pages/game/edit-games', { game: game[0] });
};

//actualizar
Games.updateGame = async (req, res) => {
    const { id } = req.params;
    const { escudo1, team1, team2,date,escudo2
    } = req.body;
    const newLink = {
        escudo1, 
        team1, 
        team2,
        date,
        escudo2
    };
    console.log({ id, newLink })
    await pool.query('UPDATE games set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Partido editado correctamente');
    res.redirect('/games/list-games');
}

//agregar
Games.getAddGames = async (req, res) => {
    res.render ('Pages/game/games')
};

module.exports = Games;
