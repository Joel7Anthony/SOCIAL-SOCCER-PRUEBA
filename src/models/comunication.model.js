const comunications = (sequelize, type) => {
    return sequelize.define('comunications', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        newsdescription: type.STRING,
        president: type.STRING,
        newsimage: type.STRING,
        publicationdate: type.STRING,
        newsauthor: type.STRING,

        createComunications: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateComunications: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = comunications