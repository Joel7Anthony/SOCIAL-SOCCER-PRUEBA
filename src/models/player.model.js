const players = (sequelize, type) => {
    return sequelize.define('players', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        playername: type.STRING,
        age: type.STRING,
        birthdate: type.STRING,
        photoplayer: type.STRING,
        tshirtnumber: type.INTEGER,
        
        createPlayerss: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatePlayers: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}


module.exports = players