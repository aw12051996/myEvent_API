'use strict';
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define('ticket', {
    event_id: DataTypes.INTEGER,
    name_ticket: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER
  }, {});
  ticket.associate = function(models) {
    // associations can be defined here
  };
  return ticket;
};