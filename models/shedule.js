'use strict';
module.exports = (sequelize, DataTypes) => {
  const shedule = sequelize.define('shedule', {
    event_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});
  shedule.associate = function(models) {
    // associations can be defined here
  };
  return shedule;
};