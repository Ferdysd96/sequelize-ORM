'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    surname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique:true,
      validate: {
        notEmpty: false,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: false,
        min: 5,
      }
    },
    telephone: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    image: DataTypes.STRING(100),
    status: {
      type: DataTypes.INTEGER,
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

  user.associate = function (models) {
    // associations can be defined here
  };

  return user;
};