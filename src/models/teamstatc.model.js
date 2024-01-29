const teamstatcs =(sequelize, type) =>{
    return sequelize.define('teamstatcs', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        league_position: type.STRING,
        goles: type.STRING,
        foundation_date: type.INTEGER,
        logo: type.STRING,
        number_players: type.INTEGER,



        createTeamstatcs:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateTeamstatcs:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = teamstatcs