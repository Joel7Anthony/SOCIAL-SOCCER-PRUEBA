const calendars = (sequelize, type) => {
    return sequelize.define('calendars', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        description: type.STRING,
        programguy: type.INTEGER,
        reminder: type.STRING,
        typeofprogram: type.STRING,

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

module.exports = calendars


