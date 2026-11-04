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

export default mongoose.model("order", orderSchema, "order");
