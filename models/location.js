'use strict';
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('location', {
    city: DataTypes.STRING,
    detail_location: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  location.associate = function(models) {
    // associations can be defined here
  };
  return location;
};