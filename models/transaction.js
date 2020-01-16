'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    user_id: DataTypes.INTEGER,
    ticket_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    qty: DataTypes.INTEGER,
    total_price: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN,
    attachment: DataTypes.STRING
  }, {});
  transaction.associate = function(models) {
    // associations can be defined here
  };
  return transaction;
};