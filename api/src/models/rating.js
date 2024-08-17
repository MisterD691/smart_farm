const mongoose = require("mongoose");

const { Schema } = mongoose;

const ratingSchema = new Schema(
  {
    stars: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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

const rating = mongoose.model("Rating", ratingSchema);
module.exports = rating;
