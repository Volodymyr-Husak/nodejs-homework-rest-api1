const { User } = require("../DB");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    // console.log(authorization);
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "Not authorized",
      });
    }

    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id);
    if (!user) {
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "Not authorized",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === "Invalid sugnature") {
      error.status = 401;
      return;
    }
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
};

module.exports = {
  auth,
};
