const coachs = (sequelize, type) => {
    return sequelize.define('coachs', {
        idcoachs: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        name_coach: type.STRING,
        coach_mail: type.STRING,
        phonecoach: type.INTEGER,
        photocoach:type.STRING,

        createCalendars: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateCalendars: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = coachs


