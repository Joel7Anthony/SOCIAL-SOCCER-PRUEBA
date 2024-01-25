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
        skills: type.STRING,
        categories: type.STRING,
        equipment: type.INTEGER,
        birthdate: type.STRING,
        photoplayer: type.STRING,
        number: type.INTEGER,

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


