const express = require("express");
const Delivery = require("../models/delivery");

const router = new express.Router();

//signup
router.post("/delivery", async (req, res) => {
  const delivery = new Delivery(req.body);
  try {
    await delivery.save();
    res.status(201).send({ delivery });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
