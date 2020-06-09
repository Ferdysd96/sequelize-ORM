'use strict'
const DataType = require('sequelize');
const sequelize = require('../database/config');

const cities = sequelize.define('cities', {
    id: {
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: DataType.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
    country_id: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
    status: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },

});


module.exports = cities;

