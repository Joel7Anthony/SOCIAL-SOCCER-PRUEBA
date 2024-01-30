const { Sequelize, HasMany } = require("sequelize");
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI } = require("../keys");

let sequelize;

// Usar URI de conexión si está disponible
if (MYSQL_URI) {
    sequelize = new Sequelize(MYSQL_URI);
} else {
    // Configuración para parámetros individuales
    sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
        host: MYSQLHOST,
        port: MYSQLPORT,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000
        }
    });
}

const usersModel = require('../models/user.model');
const teamsModel = require('../models/team.model');
const playersModel = require('../models/player.model');
const calendarsModel = require('../models/calendar.model');
const playerstatisticsModel = require('../models/playerstatistic.model');
const communicationsModel = require('../models/communication.model');
const teamstatcsModel = require('../models/teamstatc.model')
const resultsModel = require('../models/result.model');
const categorisModel = require('../models/categori.model');
const positionsModel = require('../models/position.model');
const positiondetailsModel = require('../models/positiondetail.model');
const splitstatesModel = require('../models/splitstate.model');
const gamesModel = require('../models/game.model');
const splitdetailsModel = require('../models/splitdetail.model')
const participantsModel = require('../models/participant.model')

// Autenticar y sincronizar
sequelize.authenticate()
  .then(() => {
    console.log('Connect')
  })
  .catch(err => {
    console.log('No connect')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("synchronized tables")
  })


//sincronia
const users = usersModel(sequelize, Sequelize);
const teams = teamsModel(sequelize, Sequelize);
const players = playersModel(sequelize, Sequelize)
const calendars = calendarsModel(sequelize, Sequelize);
const playerstatistics = playerstatisticsModel(sequelize, Sequelize);
const communications = communicationsModel(sequelize, Sequelize);
const teamstatcs = teamstatcsModel(sequelize, Sequelize);
const results = resultsModel(sequelize, Sequelize);
const categoris = categorisModel(sequelize, Sequelize);
const positions = positionsModel(sequelize, Sequelize);
const positiondetails = positiondetailsModel(sequelize, Sequelize);
const splitstates = splitstatesModel(sequelize, Sequelize);
const games = gamesModel(sequelize, Sequelize);
const splitdetails = splitdetailsModel(sequelize, Sequelize);
const participants =participantsModel(sequelize, Sequelize);

//Relaciones

users.hasMany(teams);
teams.belongsTo(users);

users.hasMany(players);
players.belongsTo(users);

users.hasMany(calendars);
calendars.belongsTo(users);

users.hasMany(playerstatistics);
playerstatistics.belongsTo(users);

users.hasMany(communications);
communications.belongsTo(users);

users.hasMany(teamstatcs);
teamstatcs.belongsTo(users);

users.hasMany(results);
results.belongsTo(users);

users.hasMany(categoris);
calendars.belongsTo(users);

users.hasMany(positions);
positions.belongsTo(users);

users.hasMany(positiondetails);
positiondetails.belongsTo(users);

users.hasMany(splitstates);
splitstates.belongsTo(users);

users.hasMany(games);
games.belongsTo(users)

users.hasMany(splitdetails);
splitdetails.belongsTo(users);

users.hasMany(participants);
participants.belongsTo(users);

// Exportar el objeto sequelize
module.exports = sequelize;