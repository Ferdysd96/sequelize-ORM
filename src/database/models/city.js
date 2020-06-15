'use strict';
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define('city', {
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    country_id: {
      type: DataTypes.INTEGER,
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
  city.associate = function (models) {
    city.belongsTo(models.country,{ foreignKey:'country_id', sourceKey:'id'});
  };
  return city;
};