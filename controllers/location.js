const errorHandler = require("../middleware/error_handler");
const { validationResult } = require("express-validator");
const { location } = require("../models");

// create location
exports.create = async (req, res) => {
  // get request
  const { city, detail_location, url } = req.body;
  const data = { city, detail_location, url };
  location
    .create({ ...data })
    .then(result => {
      const err = validationResult(req);

      if (!err.isEmpty()) {
        return errorHandler(res, 422, "Error Input", err.errors);
      } else {
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
