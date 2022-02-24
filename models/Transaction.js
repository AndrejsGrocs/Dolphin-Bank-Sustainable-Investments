const { Schema, model } = require("mongoose");

const transactionSchema = new Schema({
  createdOn: { type: Date, required: true, default: Date.now },
  transmittedValue: { type: Number, required: true },
  recipient: { type: Schema.Types.ObjectId, ref: "User", required: true },
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Transaction = model("Transaction", transactionSchema);

module.exports = Transaction;
