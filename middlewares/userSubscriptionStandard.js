async function userSubscriptionStandard(req, res, next) {
  try {
    const subscriptionStandard = ["starter", "pro", "business"];

    const result = subscriptionStandard.some(
      (item) => item === req.body.subscription
    );
    if (!result) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "No such subscription exists",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
}

module.exports = {
  userSubscriptionStandard,
};
