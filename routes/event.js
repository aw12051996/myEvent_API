const express = require("express");
require("express-group-routes");
const app = express();

const eventController = require("../controllers/event");

app.group("/api/v1/event", router => {
  router.post("/create", eventController.create);
  router.post("/ticket/create", eventController.create_ticket);
  router.get("/get_info", eventController.show_info);
});

module.exports = app;
