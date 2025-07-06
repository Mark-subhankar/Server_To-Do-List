const express = require("express");
const userModel = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post(
  "/create",
  [
    body("name", "Name should be at least 5 characters").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password should be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let existingUser = await userModel.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error", details: err.message });
    }
  }
);

module.exports = router;
