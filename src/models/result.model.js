const results = (sequelize, type) => {
    return sequelize.define('results', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        discipline: type.STRING,
        punctuation: type.STRING,
        result: type.STRING,
        statistics: type.STRING,

        createresults: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateresults: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}


module.exports = results