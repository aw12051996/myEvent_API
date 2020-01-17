const models = require("../models");
const Transaction = models.transaction;
const User = models.user;
const Ticket = models.ticket;

// create purchase
exports.purchase = (req, res) => {
  const input = req.body;
  Transaction.create({
    user_id: input.user_id,
    ticket_id: input.ticket_id,
    date: input.date,
    qty: input.qty,
    total_price: input.total_price,
    status: input.status,
    attachment: input.attachment
  }).then(result => {
    User.findOne({
      where: { id: result.user_id },
      attributes: { exclude: ["id", "createdAt", "updatedAt"] }
    }).then(user => res.send({ message: "success", result, user }));
    // res.send({

    //   user
    // });
  });
};

// show all Transaction
exports.show = (req, res) => {
  Transaction.findAll({
    attributes: { exclude: ["ticket_id", "user_id"] },
    include: [
      {
        as: "transactionTicket",
        model: Ticket,
        attributes: { exclude: ["createdAt", "updatedAt"] }
      },
      {
        as: "transactionUser",
        model: User,
        attributes: { exclude: ["createdAt", "updatedAt"] }
      }
    ]
  })
    .then(result => res.send(result))
    .catch(err => res.send(err));
};

// show all Transaction by User
exports.showByUser = (req, res) => {
  Transaction.findAll({
    where: { user_id: req.params.id },
    attributes: { exclude: ["ticket_id", "user_id"] },
    include: [
      {
        as: "transactionTicket",
        model: Ticket,
        attributes: { exclude: ["createdAt", "updatedAt"] }
      },
      {
        as: "transactionUser",
        model: User,
        attributes: { exclude: ["createdAt", "updatedAt"] }
      }
    ]
  })
    .then(result => res.send(result))
    .catch(err => res.send(err));
};

// show Detail Transaction
exports.showDetail = (req, res) => {
  Transaction.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ["ticket_id", "user_id"] },
    include: [
      {
        as: "transactionTicket",
        model: Ticket,
        attributes: { exclude: ["createdAt", "updatedAt"] }
      },
      {
        as: "transactionUser",
        model: User,
        attributes: { exclude: ["createdAt", "updatedAt"] }
      }
    ]
  })
    .then(result => res.send(result))
    .catch(err => res.send(err));
};
