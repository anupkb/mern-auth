const { body, validationResult } = require("express-validator");

exports.validateSignupData = [
  body("name").trim().notEmpty().withMessage("Name is required!"),
  body("email").trim().notEmpty().isEmail().withMessage("Email is required!"),

  body("phone")
    .trim()
    .notEmpty()
    .isNumeric()
    .withMessage("Number is required!"),

  body("gender").notEmpty().isIn(["Male", "Female", "Other"]),

  body("password")
    .isLength({ min: 6, max: 12 })
    .withMessage("Password must be min:6 and max:12."),
  body("confirmPassword")
    .isLength({ min: 6, max: 12 })
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("Confirm Password do not match!"),

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
  body("email").trim().notEmpty().isEmail().withMessage("Email is required!"),
  body("password")
    .isLength({ min: 6, max: 12 })
    .withMessage("Password is required!"),

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
