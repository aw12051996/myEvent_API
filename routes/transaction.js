const express = require("express");
require("express-group-routes");
const app = express();

const validator = require("../middleware/validator");
const transactionController = require("../controllers/transaction");

app.group("/api/v1/transaction", router => {
  router.post(
    "/purchase",
    // validator.transaction,
    transactionController.purchase
  );
  router.get("/get_info", transactionController.show);
  router.get("/get_info/:id", transactionController.showDetail);
  router.get("/get_info/user/:id", transactionController.showByUser);
});

module.exports = app;
