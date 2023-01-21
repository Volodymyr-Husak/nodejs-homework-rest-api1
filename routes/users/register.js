const express = require("express");

const { register } = require("../../controllers");

const { userSchemes } = require("../../schemas");
const { userPostSchema } = userSchemes;

const router = express.Router();

router.post("/", userPostSchema, register);

module.exports = router;
