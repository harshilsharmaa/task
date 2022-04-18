
module.exports = (sequelize,DataTypes)=>{

    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNULL: false,
            autoIncrement: true,
            primaryKey: true
        }
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        
    }
    )

    return User;
}
