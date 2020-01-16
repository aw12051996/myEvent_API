const models = require("../models");
const Transaction = models.transaction;
const User = models.user;

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
