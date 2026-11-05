const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },
    item: {
      type: String,
    },
    qty: {
      type: String,
      default: 1
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("order", orderSchema, "order");
