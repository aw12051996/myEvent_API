const express = require("express");
require("express-group-routes");
const app = express();

const transactionController = require("../controllers/transaction");

app.group("/api/v1/transaction", router => {
  router.post("/purchase", transactionController.purchase);
});

module.exports = app;
