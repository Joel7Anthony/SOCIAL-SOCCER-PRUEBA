const pool = require("../config/dataBase.sql");
const Coachs = require("../models/coach.model");

const  Coachs = {};

Coachs.getListCoachs = async (req, res) => {
    const coachs = await pool.query("SELECT * FROM  coachs");
    res.render("Pages/coach/list-coachs", { coachs });
};

Coachs.getAddCoachs = async (req, res) => {
    res.render("Pages/coach/coachs");
};

Coachs.postCoach= async (req, res) => {
    const { name_coach, coach_mail, phone, coaching_team } =
        req.body;
    const newLink = {
        name_coach,
        coach_mail,
        phone,
        coaching_team,
        
    };
    await pool.query("INSERT INTO coachs set ?", [newLink]);
    //Flash
    req.flash("success", "Agregado Correctamenta");
    res.redirect("/coachs/list-coachs");
};

Coachs.deleteCoach = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM coachs WHERE ID = ?", [id]);
    req.flash("success", "Eliminado correctamente");
    res.redirect("/coachs/list-coachs");
};

//actualizar//
Coachs.getCoach = async (req, res) => {
    const { id } = req.params;
    const coach = await pool.query("SELECT * FROM coachs WHERE id = ?", [id]);
    res.render("Pages/coach/edit-coachs", { coach: coach[0] });
};

//se mostrara actualizado en la lista//
Coachs.updateCoach= async (req, res) => {
    const { id } = req.params;
    const { name_coach, coach_mail, phone, coaching_team} = req.body;
    const newLink = { name_coach, coach_mail, phone, coaching_team };
    console.log({ id, newLink });
    await pool.query("UPDATE coachs set ? WHERE id = ?", [newLink, id]);
    req.flash("success", "Editado Correctamente");
    res.redirect("/coachs/list-coachs");
};

module.exports = Coachs;