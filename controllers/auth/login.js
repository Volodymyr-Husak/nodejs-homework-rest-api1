const { User } = require("../../DB");
// const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET_KEY } = process.env;

async function login(req, res) {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      // throw new Unauthorized(`Email ${email} not found`);
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: `Email ${email} not found`,
      });
    }
    const passCompare = bcrypt.compareSync(password, user.password);
    if (!passCompare) {
      // throw new Unauthorized("Password wrong");
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "Password wrong",
      });
    }

    const payload = {
      id: user.id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    await User.findByIdAndUpdate(user.id, { token });
    // await User.create({ password: hashPassword, email, subscription });
    res.status(200).json({
      status: "Ok",
      code: 200,
      token,
      user: {
        email,
        user: user.subscription,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
}

module.exports = {
  login,
};
