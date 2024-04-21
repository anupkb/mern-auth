const express = require("express");
const router = express.Router();

const {
  getUsers,
  signupUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const {
  validateSignupData,
  validateLoginData,
} = require("../utils/userValidation");

const { ensureAuth } = require("../utils/userAuth");

router.get("/api/users", ensureAuth, getUsers);
router.post("/api/signup", validateSignupData, signupUser);
router.post("/api/login", validateLoginData, loginUser);
router.get("/api/user/:userId", ensureAuth, getUser);
router.put("/api/user/:userId", ensureAuth, updateUser);
router.delete("/api/user/:userId", ensureAuth, deleteUser);

module.exports = router;
