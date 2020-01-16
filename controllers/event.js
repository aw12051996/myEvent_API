const models = require("../models");
const Event = models.event;
const Ticket = models.ticket;
const Location = models.location;

// create event
exports.create = (req, res) => {
  const input = req.body;
  Event.create({
    location_id: input.location_id,
    name_event: input.name_event,
    description: input.description,
    image: input.image
  }).then(result => {
    res.send({
      message: "success",
      result
    });
  });
};

// create ticket
exports.create_ticket = (req, res) => {
  const input = req.body;
  Ticket.create({
    event_id: input.event_id,
    name_ticket: input.name_ticket,
    price: input.price,
    stock: input.stock
  }).then(result => {
    res.send({
      message: "success",
      result
    });
  });
};

// show info
exports.show_info = (req, res) => {
  Event.findAll({
    attributes: { exclude: ["location_id"] },
    include: [
      {
        as: "eventLocation",
        model: Location,
        attributes: { exclude: ["id", "createdAt", "updatedAt"] }
      },
      {
        as: "eventTicket",
        model: Ticket,
        attributes: { exclude: ["id", "event_id", "createdAt", "updatedAt"] }
      }
    ]
  })
    .then(result => res.send(result))
    .catch(err => res.send(err));
};
