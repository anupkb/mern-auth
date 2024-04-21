const jwt = require("jsonwebtoken");

exports.ensureAuth = async (req, res, next) => {
  const jwToken = await req.headers["authorization"];

  if (!jwToken) {
    return res.status(403).json({
      success: false,
      message: "Token is required!",
    });
  }

  try {
    jwt.verify(jwToken, process.env.JWT_SECRET_KEY);
    next();
    //
  } catch (error) {
    console.log(`Error: ${error}`);

    return res.status(403).json({
      success: false,
      message: "Invalid token or expired!",
    });
  }
};
