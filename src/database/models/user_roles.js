'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_roles = sequelize.define('user_roles', {
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
  }, {});

  user_roles.associate = function (models) {
    // associations can be defined here
  };

  return user_roles;
};