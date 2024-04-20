exports.getUsers = (req, res, next) => {
  console.log(req);
  return res.status(200).json({
    success: true,
    message: "Fetched all the user list",
  });
};

exports.signupUser = (req, res, next) => {
  console.log("validated signup data!");
  const { name, email, phone, gender, password, confirmPassword } = req.body;
};

exports.loginUser = (req, res, next) => {
  console.log("Validated signup data!");
  const { email, password } = req.body;
  console.log(email, password);
};

exports.getUser = (req, res, next) => {};

exports.updateUser = (req, res, next) => {};

exports.deleteUser = (req, res, next) => {};
