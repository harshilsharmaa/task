const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('payment_integration', 'root', 'rootpassword', {

    host: 'localhost',
    dialect: 'mysql',
});


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
})



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;   

db.user = require('./User.model')(sequelize, DataTypes);
db.order = require('./Order.model')(sequelize, DataTypes);


db.sequelize.sync()
.then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
.catch(error => console.log('This error occured', error));


module.exports = db;




