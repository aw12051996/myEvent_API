const express = require("express");
require("express-group-routes");
const app = express();

const locationController = require("../controllers/location");

app.group("/api/v1/location", router => {
  router.post("/create", locationController.create);
});

module.exports = app;
