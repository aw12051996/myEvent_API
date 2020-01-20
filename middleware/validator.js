const { check } = require("express-validator");

exports.location = [
  check("city")
    .not()
    .isEmpty()
    .withMessage("City is required"),
  check("detail_location")
    .not()
    .isEmpty()
    .withMessage("Detail location is required"),
  check("url")
    .not()
    .isEmpty()
    .withMessage("Url is required")
];

exports.event = [
  check("location_id")
    .not()
    .isEmpty()
    .withMessage("Location is required"),
  check("name_event")
    .not()
    .isEmpty()
    .withMessage("Name Event is required"),
  check("description")
    .not()
    .isEmpty()
    .withMessage("Description is required"),
  check("image")
    .not()
    .isEmpty()
    .withMessage("Image is required")
];

exports.ticket = [
  check("event_id")
    .not()
    .isEmpty()
    .withMessage("Event is required"),
  check("name_ticket")
    .not()
    .isEmpty()
    .withMessage("Name Ticket is required"),
  check("price")
    .not()
    .isEmpty()
    .withMessage("Description is required")
    .isNumeric(),
  check("stock")
    .not()
    .isEmpty()
    .withMessage("Image is required")
    .isNumeric()
];

exports.transaction = [
  check("user_id")
    .not()
    .isEmpty()
    .withMessage("User is required"),
  check("ticket_id")
    .not()
    .isEmpty()
    .withMessage("Ticket is required"),
  check("date")
    .not()
    .isEmpty()
    .withMessage("Date is required"),
  check("qty")
    .not()
    .isEmpty()
    .withMessage("Qty is required")
    .isNumeric(),
  check("total_price")
    .not()
    .isEmpty()
    .withMessage("Total price is required")
    .isNumeric(),
  check("status")
    .not()
    .isEmpty()
    .withMessage("Status is required")
];

// exports.transaction = [
//   ticket
//     .findOne({
//       where: { id: req.body[0].ticket_id }
//     })
//     .then(result => {
//       const data0 = result.event_id;
//       // result = result.event_id;
//       // console.log(result.event_id);
//       var i;
//       var arr = ["true"];
//       for (i = 1; i < data.length; i++) {
//         ticket
//           .findOne({
//             where: { id: data[i].ticket_id }
//           })
//           .then(result => {
//             const data1 = result.event_id;
//             if (data0 === data1) {
//               arr.push("true");
//             } else {
//               arr.push("false");
//             }
//             const hasil = arr.every((val, arr) => val === arr[0]);
//             if (hasil === true) {
//               console.log("success");
//             } else {
//               console.log("failed");
//             }
//           });
//       }
//     })
// ];
