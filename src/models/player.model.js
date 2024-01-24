const users =(sequelize, type) =>{
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        playername:type, STRING,
        position: type, STRING,
        age: type.STRING,
        color: type.STRING,
        category: type.STRING,
        players: type.INTEGER,
        coach: type.STRING,
        administrator: type.STRING,
        creationdate: type.INTEGER,



        createUsers:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateUsers:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}


