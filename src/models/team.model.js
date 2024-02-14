const teams = (sequelize, type) => {
    return sequelize.define('teams', {
        idteams: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        name_president: type.STRING,
        name_team: type.STRING,
        phototeam: type.STRING,
        color: type.STRING,
        creationdate: type.STRING,
        categori: type.STRING,
        rol: type.STRING,

        createteams: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateteams: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}


module.exports = teams