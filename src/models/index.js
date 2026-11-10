const User = require("./user.model");
const Order = require("./order.model");
const Transaction = require("./transaction.model.pg");

const Model = {};
Model.User = User;
Model.Order = Order;
Model.Transaction = Transaction;

module.exports = Model;



