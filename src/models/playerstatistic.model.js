const playerstatistics = (sequelize, type) => {
    return sequelize.define('playerstatistics', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        photo:type.STRING,
        attacK: type.STRING,
        speed: type.STRING,
        shootingpower: type.STRING,
        endurance: type.STRING,
        ballControl: type.STRING,
        assault: type.STRING,
        shortpass: type.STRING,
        passover: type.STRING,
        dribbling: type.STRING,
        agility: type.STRING,
        balance: type.STRING,

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
