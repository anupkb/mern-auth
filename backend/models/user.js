const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Ohter"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      // maxlength: 12,
    },
    confirmPassword: {
      type: String,
      required: true,
      minlength: 6,
      // maxlenght: 12,
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Password & Confirm Password do not match!",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
