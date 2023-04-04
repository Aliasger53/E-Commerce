const express = require("express");
const { signUp } = require("../controller/user");
const router = express.Router();

router.post("./signUp", signUp);

router.post("./signin", (req, res) => {});

module.exports = router;
