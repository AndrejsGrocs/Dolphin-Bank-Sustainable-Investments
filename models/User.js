const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  createdOn: { type: Date, required: true, default: Date.now },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  accountNumber: { type: String, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  PIN: {
    type: String,
    /* required: true, */
  },
  accountBalance: {
    type: Number,
    required: true,
    default: 0,
  },

  // roles: [String],
});

const User = model("User", userSchema);

module.exports = User;
