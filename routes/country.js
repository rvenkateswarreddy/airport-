const express = require("express");
const router = express.Router();
const Country = require("../models/Country");

// GET /api/country
router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    const countries = await Country.find({ name });

    if (countries.length === 0) {
      return res.status(404).json({ error: "Country not found" });
    }

    res.json({ countries });
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
