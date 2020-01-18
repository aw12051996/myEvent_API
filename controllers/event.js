const errorHandler = require("../middleware/error_handler");
const { validationResult } = require("express-validator");
const { event, ticket, location } = require("../models");

// create event
exports.create = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return errorHandler(res, 422, "Error Input", err.errors);
  } else {
    // get request
    const { location_id, name_event, description, image } = req.body;
    const data = { location_id, name_event, description, image };
    event
      .create({ ...data })
      .then(result => {
        if (result) {
          return res.status(201).json({
            message: "success",
            result
          });
        }
      })
      .catch(err => {
        return errorHandler(res, 400, "Failed to create event");
      });
  }
};

// create ticket
exports.create_ticket = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return errorHandler(res, 422, "Error Input", err.errors);
  } else {
    const { event_id, name_ticket, price, stock } = req.body;
    const data = { event_id, name_ticket, price, stock };
    ticket
      .create({ ...data })
      .then(result => {
        if (result) {
          return res.status(201).json({
            message: "success",
            result
          });
        }
      })
      .catch(err => {
        return errorHandler(res, 400, "Failed to create ticket");
      });
  }
};

// show all event
exports.show = async (req, res) => {
  event
    .findAll({
      attributes: { exclude: ["location_id"] },
      include: [
        {
          as: "eventLocation",
          model: location,
          attributes: { exclude: ["id", "createdAt", "updatedAt"] }
        },
        {
          as: "eventTicket",
          model: ticket,
          attributes: { exclude: ["id", "event_id", "createdAt", "updatedAt"] }
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
