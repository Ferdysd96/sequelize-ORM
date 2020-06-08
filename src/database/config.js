'use strict'

require("dotenv").config();
const Sequelize = require('sequelize');


const sequelize = new Sequelize(
    process.env.db_database,
    process.env.db_user,
    process.env.db_password,
    {
        host: process.env.db_server,
        port: process.env.db_port,
        dialect: process.env.db_dialect,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false,
    });


sequelize.authenticate()
    .then(() => {
        console.log('DATABASE IS CONNECTED');
        //Remove in production
        sequelize.sync({ alter: true });
    })
    .catch((err) => {
        console.log('Unable to connect to database: ', err);
    });

module.exports = sequelize;