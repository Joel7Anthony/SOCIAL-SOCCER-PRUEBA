const teamstatitics = (sequelize, type) => {
    return sequelize.define('teamstatitics', {
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

        createTeamstatitiscs: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateTeamstatitics: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = teamstatitics