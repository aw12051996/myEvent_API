const express = require("express");
require("express-group-routes");
const app = express();

const transactionController = require("../controllers/transaction");

app.group("/api/v1/transaction", router => {
  router.post("/purchase", transactionController.purchase);
  router.get("/get_info", transactionController.show);
  router.get("/get_info/:id", transactionController.showDetail);
  router.get("/get_info/user/:id", transactionController.showByUser);
});

module.exports = app;
