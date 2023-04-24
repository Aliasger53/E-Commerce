const express = require("express");
const { signup, signin } = require("../../controller/admin/auth");
const {
  validationRequestSignUp,
  isRequestValidated,
  validationRequestSignIn,
} = require("../../validators/auth");
const router = express.Router();

router.post(
  "/admin/signup",
  validationRequestSignUp,
  isRequestValidated,
  signup
);

router.post(
  "/admin/signin",
  validationRequestSignIn,
  isRequestValidated,
  signin
);

module.exports = router;
