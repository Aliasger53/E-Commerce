const { check, validationResult } = require("express-validator");

exports.validationRequestSignUp = [
  check("firstName").notEmpty().withMessage("Please Enter First Name"),
  check("lastName").notEmpty().withMessage("Please Enter Last Name"),
  check("email").notEmpty().withMessage("Please Enter Email Address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at 6 character Long"),
];

exports.validationRequestSignIn = [
  check("email").notEmpty().withMessage("Please Enter Email Address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at 6 character Long"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
