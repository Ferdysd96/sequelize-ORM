'use strict'
const DataType = require('sequelize');
const sequelize = require('../database/config');

const country = sequelize.define('countries', {
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
    demonym: {
        type: DataType.STRING(100),
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

module.exports = country;

