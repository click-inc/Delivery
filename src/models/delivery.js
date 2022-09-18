const mongoose = require("mongoose");
const validator = require("validator");

const deliverySchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    lname: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    addressLine1: {
      type: String,
      required: true,
      lowercase: true,
    },
    addressLine2: {
      type: String,
      required: true,
      lowercase: true,
    },
    city: {
      type: String,
      required: true,
      lowercase: true,
    },
    province: {
      type: String,
      required: true,
      lowercase: true,
    },
    zipCode: {
      type: String,
      required: true,
      lowercase: true,
    },
    country: {
      type: String,
      required: true,
      lowercase: true,
    },
    orderId:{
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Delivery = mongoose.model("Delivery", deliverySchema);
module.exports = Delivery;
