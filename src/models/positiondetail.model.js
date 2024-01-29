const positiondetails =(sequelize, type) =>{
    return sequelize.define('positiondetails', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        archer: type.STRING,
        Libero : type.STRING,
        Center : type.STRING,
        Carrilero: type.STRING,
        Pivot: type.STRING,
        Inside : type.STRING,
        Flyer : type.STRING,
        Midfielder: type.STRING,
        End: type.STRING,
        SecondStriker : type.STRING,
        midfielder : type.STRING,

        createPositiondetails:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatePositiondetails:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = positiondetails