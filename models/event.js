"use strict";
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    "event",
    {
      location_id: DataTypes.INTEGER,
      name_event: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING
    },
    {}
  );
  event.associate = function(models) {
    // associations can be defined here
    event.belongsTo(models.location, {
      as: "eventLocation",
      foreignKey: "location_id"
    });
    event.hasMany(models.ticket, {
      as: "eventTicket",
      foreignKey: "event_id"
    });
  };
  return event;
};
