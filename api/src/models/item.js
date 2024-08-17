const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const item = mongoose.model("Item", itemSchema);
module.exports = item;
