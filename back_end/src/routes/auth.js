const express = require("express");
const { signup, signin } = require("../controller/auth");

const {
  validationRequestSignUp,
  isRequestValidated,
  validationRequestSignIn,
} = require("../validators/auth");
const router = express.Router();

router.post("/signup", validationRequestSignUp, isRequestValidated, signup);

router.post("/signin", validationRequestSignIn, isRequestValidated, signin);

// router.post("/profile", requireSignin, (req, res) => {
//   res.status(200).json({ user: "profile" });
// });

module.exports = router;
