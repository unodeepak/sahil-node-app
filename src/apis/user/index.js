const express = require("express");
const rotues = express.Router();
const User = require("./user.controller");

rotues.post("/create-user", User.createUserController);

module.exports = rotues;