const splitdetails =(sequelize, type) =>{
    return sequelize.define('splitdetails', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        yellowCard:type.STRING ,
        red_card: type.STRING,
        goals:type.STRING ,
        possession:type.STRING,  
        totalShots: type.STRING,
        shotsTotal:type.STRING,
        deflectedShots:type.STRING ,
        passes: type.STRING,
        shotsCorner:type.STRING ,
        outOfPlay:type.STRING,  
        serialShots: type.STRING,
        saves:type.STRING,
        fouls_committed:type.INTEGER,
        fouls_received:type.INTEGER,
        expected_goals:type.INTEGER,

        createSplitdetails:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateSplitdetails:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = splitdetails
