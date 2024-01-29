const { STRING } = require("sequelize")

const categoris =(sequelize, type) =>{
    return sequelize.define('categori', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        sub12: type.STRING,
        sub15: type.STRING,
        sub16: type.STRING,
        first: type.STRING,
        second : type.INTEGER,
        maximum : type.STRING,
        championOfChampions : type.STRING,
        league: type.STRING,
        

        createCategoris:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateCategoris:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = categoris