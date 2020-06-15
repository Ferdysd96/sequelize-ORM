'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    demonym: {
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
  country.associate = function (models) {
    country.hasMany(models.city,{ foreignKey:'country_id', sourceKey:'id'});
  };
  return country;
};