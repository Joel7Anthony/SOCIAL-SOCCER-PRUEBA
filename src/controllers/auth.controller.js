const passport = require('passport');
const auth = require('../lib/auth');
const orm = require('../config/dataBase.orm');
const sql = require('../config/database.sql');
const { create } = require('express-handlebars');


const Auth = {}

Auth.viwssingin = async (req, res) => {
  const teams = await sql.query('SELECT * FROM teams')
  console.log(teams[0])
  if (teams[0] == undefined) {
    await sql.query('create view teamscoachs as SELECT t.name_team,c.* FROM teams t join  coachs c on c.teamIdteams = t.idteams')
  }
  res.render('auth/signin');
};


Auth.signin = async (req, res, next) => {


  passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next);
};


Auth.signup = async (req, res, next) => {
  passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
  });
} 

module.exports = Auth 