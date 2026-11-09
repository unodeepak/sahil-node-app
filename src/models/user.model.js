const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
        type: String,
        unique: true,
        index: true,
        trim: true,
        lowercase: true
    },

    password: {
      type: String,
    },

    age: {
        type: Number,
        default: 10
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model("user", UserSchema, "user");
