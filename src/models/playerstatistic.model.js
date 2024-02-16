const playerstatistics = (sequelize, type) => {
    return sequelize.define('playerstatistics', {
        idstats: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        photo:type.STRING,
        name: type.STRING,
        physical: type.STRING,
        duels: type.STRING,
        shot: type.STRING,
        defense: type.STRING,
        pass: type.STRING, 
        ability: type.STRING,

        createPlayerstatistics: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatePlayerstatistics: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = playerstatistics
