const { User } = require("../../DB");

const { sendEmail } = require("../../services");

async function reVerification(req, res) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: "Not found",
        code: 400,
        message: `User with email ${email} is missing`,
      });
    }
    if (user.verify) {
      return res.status(400).json({
        status: "Bad Request",
        code: 400,
        message: "Verification has already been passed",
      });
    }

    const verificationToken = user.verificationToken;

    const mail = {
      to: email,
      subject: "Підтвердження email",
      html: `<a target="_blank" href="http://localhost:3000/users/verify/${verificationToken}">Підтвердіть email</a>`,
    };

    await sendEmail(mail);

    await res.status(200).json({
      status: "Ok",
      code: 200,
      message: "Verification email sent",
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
  reVerification,
};
