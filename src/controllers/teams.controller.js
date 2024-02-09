const pool = require("../config/database.sql");
const teams = require("../models/team.model");
const { isLoggedIn } = require('../lib/auth');

const Teams = {};

Teams.getListTeams = async (req, res) => {
    const teams = await pool.query("SELECT * FROM  teams");
    res.render("Pages/team/list-teams", { teams });
};

Teams.getAddTeams = async (req, res) => {
    res.render("Pages/team/teams");
};

Teams.postTeam = async (req, res) => {
    const { name_president, name_team, photo, color, creationdate, rol, categori } =
        req.body;
    const newLink = {
        name_president,
        name_team,
        photo,
        color,
        creationdate,
        rol,
        categori,

    };
    await pool.query("INSERT INTO teams set ?", [newLink]);
    //Flash
    req.flash("success", "Agregado Correctamenta");
    res.redirect("/teams/list-teams");
};

Teams.deleteTeam = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM teams WHERE ID = ?", [id]);
    req.flash("success", "Eliminado correctamente");
    res.redirect("/teams/list-teams");
};

//actualizar//
Teams.getTeam = async (req, res) => {
    const { id } = req.params;
    const team = await pool.query("SELECT * FROM teams WHERE id = ?", [id]);
    res.render("Pages/team/edit-teams", { team: team[0] });
};

//se mostrara actualizado en la lista//
Teams.updateTeam = async (req, res) => {
    const { id } = req.params;
    const { name_president, name_team, color, creationdate, rol, categori } = req.body;
    const newLink = { name_president, name_team, color, creationdate, rol, categori };
    console.log({ id, newLink });
    await pool.query("UPDATE teams set ? WHERE id = ?", [newLink, id]);
    req.flash("success", "Editado Correctamente");
    res.redirect("/teams/list-teams");
};

module.exports = Teams;