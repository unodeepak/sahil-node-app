const express = require("express");
const rotues = express.Router();
const order = require("./order.controller");

rotues.post("/create-order", order.createOrderController);
rotues.get("/get-total-amount", order.getTotalAmountController);
rotues.get("/get-total-amount-by-userid/:userId", order.getTotalAmountByUserIdController);

module.exports = rotues;