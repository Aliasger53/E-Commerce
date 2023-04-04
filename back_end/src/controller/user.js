const User = require("../models/user");

exports.signUp = (req, res) => {
  User.findOne({ email: req.body.email }).exec((user) => {
    if (user)
      return res.status(400).json({
        message: "User already registered",
      });

    const { firstName, lastName, email, password } = req.body;

    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      userName: Math.random().toString(),
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Something Whent Wrong Please try again",
        });
      }

      if (data) {
        return res.status(201).json({
          message: "user created successfully",
        });
      }
    });
  });
};
