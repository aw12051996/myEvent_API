const express = require("express");
const bodyParser = require("body-parser");
require("express-group-routes");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// import routes
const LocationRoutes = require("./routes/location");
const EventRoutes = require("./routes/event");

app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("hallo");
});

// Use Routes
app.use(LocationRoutes);
app.use(EventRoutes);
app.listen(port, () => console.log(`Listening on port ${port}!`));
