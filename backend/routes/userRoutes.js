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

router.get("/api/users", getUsers);
router.post("/api/signup", validateSignupData, signupUser);
router.post("/api/login", validateLoginData, loginUser);
router.route("/api/user/:userId").get(getUser);
router.route("/api/user/:userId").put(updateUser);
router.route("/api/user/:userId").delete(deleteUser);

module.exports = router;
