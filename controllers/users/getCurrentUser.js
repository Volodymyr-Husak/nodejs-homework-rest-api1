async function getCurrentUser(req, res) {
  try {
    const { email, subscription } = req.user;
    res.status(200).json({
      status: "success",
      code: 200,
      user: { email, subscription },
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
  getCurrentUser,
};
