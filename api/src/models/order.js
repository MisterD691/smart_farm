const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema(
  {
    reference: {
      type: String,
      required: true,
      unique: true
    },
    orderDate: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ["Soumis", "En cours", "Terminé", "Annulé"],
      default: "Soumis",
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", schema);
module.exports = Order;
