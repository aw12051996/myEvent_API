const errorHandler = require("../middleware/error_handler");
const { event, ticket, location } = require("../models");

// create event
exports.create = async (req, res) => {
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
      return errorHandler(res, 500, "Failed to create location");
    });
};

// create ticket
exports.create_ticket = async (req, res) => {
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
      return errorHandler(res, 500, "Failed to create location");
    });
};

// show all event
exports.show = (req, res) => {
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
      }
    })
    .catch(err => {
      return errorHandler(res, 500, "Failed to create location");
    });
};
