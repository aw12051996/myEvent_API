// const { check } = require("express-validator");

// const { user } = require("../../models");

// exports.create = [
//   check("email")
//     .isEmail()
//     .custom(value => {
//       return user.findOne({ where: { email: value } }).then(user => {
//         if (user) {
//           return Promise.reject("Email already taken");
//         }
//       });
//     }),
//   check("phone")
//     .isNumeric()
//     .withMessage("Phone must contain only numeric"),
//   check("password")
//     .isLength({ min: 8 })
//     .withMessage("Min password lenght is 8")
// ];
