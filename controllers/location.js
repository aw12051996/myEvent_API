const models = require("../models");
const Location = models.location;

// create location
exports.create = (req, res) => {
  const input = req.body;
  Location.create({
    city: input.city,
    detail_location: input.detail_location,
    url: input.url
  }).then(result => {
    res.send({
      message: "success",
      result
    });
  });
};
