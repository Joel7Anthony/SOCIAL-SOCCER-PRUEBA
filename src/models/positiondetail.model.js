const positiondetails =(sequelize, type) =>{
    return sequelize.define('positiondetails', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        archer: type.STRING,
        libero : type.STRING,
        center : type.STRING,
        carrilero: type.STRING,
        pivot: type.STRING,
        inside : type.STRING,
        flyer : type.STRING,
        midfielder: type.STRING,
        end: type.STRING,
        secondStriker : type.STRING,


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