'use strict'
const DataType = require('sequelize');
const sequelize = require('../database/config');
const roles = require('./userRol');

const users = sequelize.define('users', {
    id: {
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataType.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
    surname: {
        type: DataType.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
    email: {
        type: DataType.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: false,
            isEmail: true,
        },
    },
    password: {
        type: DataType.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: false,
            min: 5,
        }
    },
    telephone: {
        type: DataType.STRING(100),
        allowNull: false,
    },
    role_id: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
    image: DataType.STRING(100),
    status: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    }
}, {
    defaultScope: {
        attributes: { exclude: ['password'] },
    }
});

 users.belongsTo(roles, { as:'role', foreignKey: 'role_id', sourceKey: 'id' });
 roles.hasMany(users, { foreignKey: 'role_id', sourceKey: 'id' });
module.exports = users;
