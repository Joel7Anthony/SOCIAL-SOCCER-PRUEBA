const users =(sequelize, type) =>{
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        newsdescription:type.STRING ,
        newsimage: type.STRING,
        publicationdate:type.STRING ,
        newsauthor:type.STRING,  
        profileimage: type.STRING,
        description:type.STRING,

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