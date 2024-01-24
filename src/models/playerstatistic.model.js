const users =(sequelize, type) =>{
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        name:type.STRING,
        attacK: type.INTEGER,
        speed: type.INTEGER,
        shootingpower: type.INTEGER,
        endurance: type.INTEGER,
        ballControl: type.INTEGER,
        assault: type.INTEGER,
        




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


