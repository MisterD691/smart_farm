const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["Admin", "Client"],
    },
    phone: {
      unique: true,
      type: String,
    },
    address: {
      type: String,
    },
    picture: {
      type: String,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const user = mongoose.model("User", userSchema);
module.exports = user;
