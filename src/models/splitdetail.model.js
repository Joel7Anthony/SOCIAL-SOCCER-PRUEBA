const splitdetails =(sequelize, type) =>{
    return sequelize.define('splitdetails', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        yellowCard:type.STRING ,
        Red_card: type.STRING,
        Goals:type.STRING ,
        Possession:type.STRING,  
        totalShots: type.STRING,
        shotsTotal:type.STRING,
        deflectedShots:type.STRING ,
        Passes: type.STRING,
        shotsCorner:type.STRING ,
        outOfPlay:type.STRING,  
        serialShots: type.STRING,
        Saves:type.STRING,

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
