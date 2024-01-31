const pool = require("../config/database.sql");
const categories = require("../models/categori.model");

const Categories = {};

Categories.getListCategories = async ( req, res) => {
    const categories = await pool.query('SELECT * FROM calend')
}