const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      require: true
    },
    item: {
      type: String,
      require: true
    },
    qty: {
      type: Number,
      default: 1
    },
    amount: {
      type: Number,
      min: 0,
    }
  },
  { timestamps: true },
);

// orderSchema.pre('save', function() {
//   if (this.amount) {
//     this.amount = 1;
//   }
// })

module.exports = mongoose.model("order", orderSchema, "order");
