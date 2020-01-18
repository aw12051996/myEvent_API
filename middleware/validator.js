const { check } = require("express-validator");

exports.location = [
  check("city")
    .not()
    .isEmpty()
    .withMessage("City is required"),
  check("detail_location")
    .not()
    .isEmpty()
    .withMessage("Detail location is required"),
  check("url")
    .not()
    .isEmpty()
    .withMessage("Url is required")
];

exports.event = [
  check("location_id")
    .not()
    .isEmpty()
    .withMessage("Location is required"),
  check("name_event")
    .not()
    .isEmpty()
    .withMessage("Name Event is required"),
  check("description")
    .not()
    .isEmpty()
    .withMessage("Description is required"),
  check("image")
    .not()
    .isEmpty()
    .withMessage("Image is required")
];

exports.ticket = [
  check("event_id")
    .not()
    .isEmpty()
    .withMessage("Event is required"),
  check("name_ticket")
    .not()
    .isEmpty()
    .withMessage("Name Ticket is required"),
  check("price")
    .not()
    .isEmpty()
    .withMessage("Description is required")
    .isNumeric(),
  check("stock")
    .not()
    .isEmpty()
    .withMessage("Image is required")
    .isNumeric()
];
