const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.signupUser = async (req, res, next) => {
  const { name, email, phone, gender, password, confirmPassword } = req.body;

  try {
    const existUser = await User.findOne({ email: email });

    if (existUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered!",
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      password: hashPassword,
      confirmPassword: hashPassword,
    });

    const result = await user.save();

    return res.status(201).json({
      success: true,
      message: "Registered Successfully!",
      data: result,
    });
    //
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.loginUser = async (req, res, next) => {
  console.log("Validated signup data!");
  const { email, password } = req.body;

  try {
    const existUser = await User.findOne({ email: email });

    if (!existUser) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please register first.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, existUser.password);
    if (!isPasswordValid) {
      return res.json({
        success: false,
        message: "Wrong Password, Please try again!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Logged in Successfully!",
    });
    //
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
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
    //
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    return res.status(200).json({
      success: true,
      message: "Fetched your profile info.",
      data: user,
    });
    //
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  const { name, email, phone, gender } = req.body;

  if (!name || !email || !phone || !gender) {
    return res.status(403).json({
      success: false,
      message:
        "Name, Email, Phone, Gender is required to update the user details.",
    });
  }

  try {
    const user = await User.findById(userId);

    user.name = name;
    user.email = email;
    user.phone = phone;
    user.gender = gender;

    const updatedUser = await user.save();

    return res.status(200).json({
      success: true,
      message: "User got update",
      data: updatedUser,
    });
    //
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const deleteUser = await User.findByIdAndDelete(userId);

    return res.status(200).json({
      success: true,
      message: `${deleteUser.name}! You've deleted your profile!`,
      data: deleteUser,
    });
    //
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
