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
