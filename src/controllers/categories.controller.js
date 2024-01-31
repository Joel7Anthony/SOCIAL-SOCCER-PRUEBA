const pool = require("../config/database.sql");
const  categories = require ("../models/categori.model")

const Categories = {};

Categories.getListCategories = async (req, res) => {
    const categories = await pool.query('SELECT * FROM  players');
    res.render('Categories/categorie/list-categories', { categories });
  };

  Categories.postCategori = async (req, res) => {
    const {
      under12, under15, under16, league, first, second, maxima, championofchampions
    } = req.body;
    const newLink = {
    under12, under15, under16, league, first, second, maxima, championofchampions
    };
    await pool.query('INSERT INTO categories set ?', [newLink]);
  //Flash
  req.flash('success', 'categoria seleccionada');
  res.redirect("/categories/list-categories");
};

//eliminar
Categories.deleteCategori = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM categories WHERE ID = ?", [id]);
    req.flash('success', 'Categoria Eliminado correctamente');
    res.redirect("/categories/list-categories");
  };
  //editar
  Categories.getCategori = async (req, res) => {
    const { id } = req.params;
    const categorie = await pool.query('SELECT * FROM categories WHERE id = ?', [id]);
    res.render('Categories/categories/edit-categories', { categorie: categorie[0] });
  };
  //actualizar
  Categories.updateCategori= async (req, res) => {
    const { id } = req.params;
    const { under12, under15, under16, league, first, second, maxima, championofchampions
    } = req.body;
    const newLink = {
        under12, under15, under16, league, first, second, maxima, championofchampions
    };
    console.log({ id, newLink })
    await pool.query('UPDATE categories set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Categoria editada Correctamenta');
    res.redirect('/categories/list-categories');
  };

  //agregar
  Categories.getAddCategories = async (req, res) => {
    const categories = await pool.query('SELECT * FROM  categories');
    res.render('Categories/categories/categories', { categories });
  };
  
  module.exports = Categories;
   


















