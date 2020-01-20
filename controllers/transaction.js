const errorHandler = require("../middleware/error_handler");
const { validationResult } = require("express-validator");
const { transaction, user, ticket } = require("../models");

// create purchase
exports.purchase = (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return errorHandler(res, 422, "Error Input", err.errors);
  } else {
    const { user_id, ticket_id, date, qty, total_price, status } = req.body;
    const data = { user_id, ticket_id, date, qty, total_price, status };

    // transaction.bulkCreate(req.body, { returning: true }).then(result => {
    //   res.send({
    //     message: "success",
    //     result
    //   });
    // });
    ticket
      .findOne({
        where: { id: data.ticket_id },
        attributes: ["id", "stock"]
      })
      .then(result => {
        const stock = result.stock;
        const currentStock = stock - data.qty;
        // return res.status(200).json(result.stock);
        if (stock >= 1) {
          if (currentStock >= 0) {
            transaction
              .create({ ...data })
              .then(result => {
                if (result) {
                  user
                    .findOne({
                      where: { id: result.user_id },
                      attributes: ["email"]
                    })
                    .then(user => {
                      return res.status(201).json({
                        message: "success",
                        result,
                        user
                      });
                    });
                }
              })
              .catch(err => {
                return errorHandler(res, 400, "Failed to create event");
              });
          } else {
            return errorHandler(
              res,
              404,
              `insufficient stock, you can only buy ${stock} ticket`
            );
          }
        } else {
          return errorHandler(res, 404, "Stock is empty");
        }
      })
      .catch(err => {
        return errorHandler(res, 404, "Stock is empty");
      });
  }
};

// show all Transaction
exports.show = async (req, res) => {
  transaction
    .findAll({
      attributes: { exclude: ["ticket_id", "user_id"] },
      include: [
        {
          as: "transactionTicket",
          model: ticket,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        },
        {
          as: "transactionUser",
          model: user,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ]
    })
    .then(result => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return errorHandler(res, 422, "Event not found");
      }
    })
    .catch(err => {
      return errorHandler(res, 422, "Event not found");
    });
};

// show all Transaction by User
exports.showByUser = (req, res) => {
  transaction
    .findAll({
      where: { user_id: req.params.id },
      attributes: { exclude: ["ticket_id", "user_id"] },
      include: [
        {
          as: "transactionTicket",
          model: ticket,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        },
        {
          as: "transactionUser",
          model: user,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ]
    })
    .then(result => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return errorHandler(res, 422, "Event not found");
      }
    })
    .catch(err => {
      return errorHandler(res, 422, "Event not found");
    });
};

// show Detail Transaction
exports.showDetail = (req, res) => {
  transaction
    .findOne({
      where: { id: req.params.id },
      attributes: { exclude: ["ticket_id", "user_id"] },
      include: [
        {
          as: "transactionTicket",
          model: ticket,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        },
        {
          as: "transactionUser",
          model: user,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ]
    })
    .then(result => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return errorHandler(res, 422, "Event not found");
      }
    })
    .catch(err => {
      return errorHandler(res, 422, "Event not found");
    });
};
