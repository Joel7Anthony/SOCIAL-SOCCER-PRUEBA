const pool = require("../config/database.sql");
const coachs = require("../models/coach.model");
const { isLoggedIn } = require('../lib/auth');
const teams = require("../models/team.model");

const  Coachs = {};

Coachs.getListCoachs = async (req, res) => {
    const coachs = await pool.query("SELECT * FROM  teamscoachs");
    res.render("Pages/coach/list-coachs", { coachs });
};

Coachs.getAddCoachs = async (req, res) => {
    const teams = await pool.query('SELECT * from teams')
    res.render("Pages/coach/coachs",{ teams});
};



Coachs.postCoach= async (req, res) => {
    const id = req.user.id
    const { name_coach, coach_mail, phone, country } =
        req.body;
    const newLink = {
        name_coach,
        coach_mail,
        phonecoach:phone,
        teamIdteams:country,
        userId: id
        
    };
    await pool.query("INSERT INTO coachs set ?", [newLink]);
    //Flash
    req.flash("success", "Agregado Correctamenta");
    res.redirect("/coachs/list-coachs");
};

Coachs.deleteCoach = async (req, res) => {
    const { idcoachs } = req.params;
    await pool.query("DELETE FROM coachs WHERE idcoachs = ?", [idcoachs]);
    req.flash("success", "Eliminado correctamente");
    res.redirect("/coachs/list-coachs");
};

//actualizar//
Coachs.getCoach = async (req, res) => {
    const { idcoachs } = req.params;
    const coach = await pool.query("SELECT * FROM coachs WHERE idcoachs = ?", [idcoachs]);
    res.render("Pages/coach/edit-coachs", { coach: coach[0] });
};

//se mostrara actualizado en la lista//
Coachs.updateCoach= async (req, res) => {
    const { idcoachs } = req.params;
    const { name_coach, coach_mail, phonecoach, coaching_team} = req.body;
    const newLink = { name_coach, coach_mail, phonecoach, coaching_team };
    console.log({ idcoachs, newLink });
    await pool.query("UPDATE coachs set ? WHERE idcoachs = ?", [newLink, idcoachs]);
    req.flash("success", "Editado Correctamente");
    res.redirect("/coachs/list-coachs");
};

module.exports = Coachs;