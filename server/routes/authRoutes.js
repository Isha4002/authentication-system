const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  register,
  login,
  getProfile,
} = require("../controllers/authController");

// Register
router.post("/register", register);

// Login
router.post("/login", login);

router.get("/profile", authMiddleware, getProfile);

module.exports = router;