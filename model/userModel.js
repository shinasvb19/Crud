const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },

    gender: {
      type: String,
      enum: ["male", "female"],
    },

    dob: {
      type: Date,
    },

    State: {
      type: String,
    },
    pincode: {
      type: Number,
    },
    city: {
      type: String,
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
