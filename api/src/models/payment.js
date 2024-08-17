const mongoose = require("mongoose");

const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
      required: true,
    },
    paymentMode: {
      type: String,
      required: true,
      enum: ["OM", "MOMO", "Carte bancaire"],
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    }
  },
  {
    timestamps: true,
  },
);

const payment = mongoose.model("Payment", paymentSchema);
module.exports = payment;
