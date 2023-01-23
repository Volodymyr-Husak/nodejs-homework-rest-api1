const { User } = require("../../DB");

async function updateSubscriptionUser(req, res) {
  try {
    const { _id, email } = req.user;

    const result = await User.findOneAndUpdate(
      { _id: _id },
      { $set: req.body }
    );

    const { subscription } = req.body;

    if (!result) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
    }

    res.json({
      status: "success",
      code: 200,
      updateUser: {
        email,
        subscription,
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
  updateSubscriptionUser,
};
