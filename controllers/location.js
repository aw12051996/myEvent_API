const errorHandler = require("../middleware/error_handler");
const { validationResult } = require("express-validator");
const { location } = require("../models");

// create location
exports.create = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return errorHandler(res, 422, "Error Input", err.errors);
  } else {
    // get request
    const { city, detail_location, url } = req.body;
    const data = { city, detail_location, url };
    location
      .create({ ...data })
      .then(result => {
        if (result) {
          return res.status(201).json({
            message: "success",
            result
          });
        }
      })
      .catch(err => {
        return errorHandler(res, 400, "Failed to create event");
      });
  }
};
