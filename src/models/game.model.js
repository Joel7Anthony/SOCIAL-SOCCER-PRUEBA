const games =(sequelize, type) =>{
    return sequelize.define('games', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        namegame: type.STRING,
        descripciongame : type.STRING,
        locationgame : type.STRING,
        imagegame: type.STRING,

        createGames:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateGames:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = games