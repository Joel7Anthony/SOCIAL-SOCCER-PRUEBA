const players =(sequelize, type) =>{
    return sequelize.define('players', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        playername:type.STRING,
        position: type.STRING,
        age: type.STRING,
        skills: type.STRING,
        categories: type.STRING,
        equipment: type.INTEGER,
        birthdate: type.STRING,
        photoplayer: type.STRING,
        number: type.INTEGER,

        createPlayerss:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatePlayers:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}


module.exports = players