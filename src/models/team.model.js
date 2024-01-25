const teams =(sequelize, type) =>{
    return sequelize.define('teams', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name_president:type.STRING,
        name_team: type.STRING,
        photo: type.STRING,
        color: type.STRING,
        category: type.STRING,
        players: type.INTEGER,
        coach: type.STRING,
        administrator: type.STRING,
        creationdate: type.INTEGER,
        rol: type.STRING,



        createteams:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateteams:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}


module.exports = teams