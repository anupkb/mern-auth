const jwt = require("jsonwebtoken");

exports.ensureAuth = (req, res, next) => {
  const jwToken = req.headers["authorization"];

  if (!jwToken) {
    return res.status(401).json({
      success: false,
      message: "Token is required for authentication.",
    });
  }

  try {
    const decode = jwt.verify(jwToken, process.env.JWT_SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired. Please log in again.",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid token. Please provide a valid token.",
      });
    }
  }
};
