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
        photo: type.STRING,
        tshirtnumber: type.INTEGER,
        position: type.STRING,
        positiondetail: type.STRING,


        
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