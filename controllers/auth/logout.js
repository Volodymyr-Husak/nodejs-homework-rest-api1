const { User } = require("../../DB");

async function logout(req, res) {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });

  res.status(204).json({
    status: "No content",
    code: 204,
  });
}

module.exports = {
  logout,
};
