const { User } = require("../../DB");

const bcrypt = require("bcryptjs");

const gravatar = require("gravatar");

async function register(req, res) {
  try {
    const { password, email, subscription } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        status: "Conflict",
        code: 409,
        message: `User with email ${email} already exist`,
      });
    }

    const avatarURL = gravatar.url(email);

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    await User.create({
      password: hashPassword,
      email,
      subscription,
      avatarURL,
    });

    res.status(201).json({
      status: "Created",
      code: 201,
      user: {
        email,
        password,
        subscription,
        avatarURL,
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
  register,
};
