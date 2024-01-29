const communications =(sequelize, type) =>{
    return sequelize.define('communications', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        newsdescription:type.STRING ,
        president: type.STRING,
        newsimage: type.STRING,
        publicationdate:type.STRING ,
        newsauthor:type.STRING,  

        createCommunications:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateCommunications:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = communications