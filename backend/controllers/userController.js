const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handleError = (res, statusCode, message) => {
  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};

exports.signupUser = async (req, res, next) => {
  console.log("hi");
  const { name, email, phone, gender, password } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      return handleError(res, 409, "Email already registered!");
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      email,
      phone,
      gender,
      password: hashPassword,
      confirmPassword: hashPassword,
    });

    const result = await user.save();

    return res.status(201).json({
      success: true,
      message: "Registered Successfully!",
      data: result,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    return handleError(res, 500, "Internal Server Error!");
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (!existUser) {
      return handleError(res, 404, "User not found. Please register first.");
    }

    const isPasswordValid = await bcrypt.compare(password, existUser.password);
    if (!isPasswordValid) {
      return handleError(res, 401, "Wrong Password, Please try again!");
    }

    const tokenObject = {
      _id: existUser.id,
      name: existUser.name,
      email: existUser.email,
    };

    const jwToken = jwt.sign(tokenObject, process.env.JWT_SECRET_KEY, {
      expiresIn: "50s",
    });

    // Set Cookies
    const options = {
      // expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      expiresIn: new Date(Date.now() + 1000 * 50),
      httpOnly: true,
      sameSite: "lax",
    };

    return res.cookie("token", jwToken, options).json({
      success: true,
      message: "Logged in Successfully!",
      tokenObject,
    });

    // return res.status(200).json({
    //   success: true,
    //   message: "Logged in Successfully!",
    //   jwToken,
    //   tokenObject,
    // });
  } catch (error) {
    console.log(`Error: ${error}`);
    return handleError(res, 500, "Internal Server Error!");
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      message: "Fetched all the registered users.",
      data: users,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    return handleError(res, 500, "Internal Server Error!");
  }
};

exports.getUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return handleError(res, 404, "User not found.");
    }

    return res.status(200).json({
      success: true,
      message: "Fetched user profile.",
      data: user,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    return handleError(res, 500, "Internal Server Error!");
  }
};

exports.updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  const { name, email, phone, gender } = req.body;

  if (!name || !email || !phone || !gender) {
    return handleError(
      res,
      400,
      "Name, Email, Phone, Gender are required fields."
    );
  }

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { name, email, phone, gender },
      { new: true }
    );

    if (!user) {
      return handleError(res, 404, "User not found.");
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully.",
      data: user,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    return handleError(res, 500, "Internal Server Error!");
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return handleError(res, 404, "User not found.");
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully.",
      data: deletedUser,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    return handleError(res, 500, "Internal Server Error!");
  }
};
