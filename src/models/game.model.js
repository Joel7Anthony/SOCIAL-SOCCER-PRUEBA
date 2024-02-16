const games = (sequelize, type) => {
    return sequelize.define('games', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        team1: type.STRING,
        team2: type.STRING,
        escudo1: type.STRING,
        date: type.STRING,
        escudo2:type.STRING,
        time:type.INTEGER,

        createGames: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateGames: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = games