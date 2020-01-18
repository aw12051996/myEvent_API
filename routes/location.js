const express = require("express");
require("express-group-routes");
// const { check } = require("express-validator");
const app = express();

const validator = require("../middleware/validator");
const locationController = require("../controllers/location");

app.group("/api/v1/location", router => {
  router.post("/create", validator.location, locationController.create);
});

module.exports = app;
