const express = require("express");
const routes = express.Router();
const userRoute = require("../apis/user");
const orderRotue = require("../apis/order");

routes.use("/user", userRoute);
routes.use("/order", orderRotue);

module.exports = routes;

