const playerstatistics = (sequelize, type) => {
    return sequelize.define('playerstatistics', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: type.STRING,
        attacK: type.INTEGER,
        speed: type.INTEGER,
        shootingpower: type.INTEGER,
        endurance: type.INTEGER,
        ballControl: type.INTEGER,
        assault: type.INTEGER,
        shortpass: type.INTEGER,
        passover: type.INTEGER,
        dribbling: type.INTEGER,
        agility: type.INTEGER,
        balance: type.INTEGER,

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
