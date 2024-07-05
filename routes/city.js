const express = require("express");
const router = express.Router();
const City = require("../models/City");

// GET /api/city
router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    const cities = await City.find({ name });

    if (cities.length === 0) {
      return res.status(404).json({ error: "City not found" });
    }

    res.json({ cities });
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
