const express = require("express");
const rotues = express.Router();
const User = require("./user.controller");
const joiSchema = require("./user.schema");
const validateForm = require("../../middleware/validateForm");

rotues.post("/create-user", validateForm(joiSchema.createUser), User.createUserController);

module.exports = rotues;