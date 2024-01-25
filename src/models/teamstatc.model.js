const users =(sequelize, type) =>{
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name_team: type, STRING,
        league_position: type.STRING,
        goles: type.STRING,
        categories: type.STRING,
        foundation_date: type.INTEGER,
        logo: type.STRING,
        number_players: type.INTEGER,



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

module.exports = users