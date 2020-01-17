const errorHandler = require("../middleware/error_handler");
const { location } = require("../models");

// create location
exports.create = async (req, res) => {
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
      return errorHandler(res, 500, "Failed to create location");
    });
};
