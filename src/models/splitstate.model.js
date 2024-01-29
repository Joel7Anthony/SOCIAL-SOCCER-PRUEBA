const splitstates =(sequelize, type) =>{
    return sequelize.define('splitstates', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        progress: type.STRING,
        completed : type.STRING,
        canceled : type.STRING,
        finalData : type.STRING,

        createSplitstates:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateSplitstates:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = splitstates