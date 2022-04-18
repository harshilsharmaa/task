const Sequelize = require("sequelize");
const Op = Sequelize.Op;


module.exports = (sequelize,DataTypes)=>{

    const Order = sequelize.define('order', {
        order_id:{
            type:DataTypes.STRING,
            allowNULL: false,
        }
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }

    )

    return Order;
}
