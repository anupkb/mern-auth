const { body, validationResult } = require("express-validator");

exports.validateSignupData = [
  body("name").notEmpty().withMessage("Name is required!"),
  body("email").isEmail().withMessage("Invalid email format!"),
  body("phone").isNumeric().withMessage("Phone number must be numeric!"),
  body("gender")
    .notEmpty()
    .isIn(["Male", "Female", "Other"])
    .withMessage("Invalid gender!"),
  body("password")
    .isLength({ min: 6, max: 12 })
    .withMessage("Password must be between 6 and 12 characters."),
  body("confirmPassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed!",
        errors: errors.array(),
      });
    }
    next();
  },
];

exports.validateLoginData = [
  body("email").isEmail().withMessage("Invalid email format!"),
  body("password")
    .isLength({ min: 6, max: 12 })
    .withMessage("Password must be between 6 and 12 characters."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed!",
        errors: errors.array(),
      });
    }
    next();
  },
];
