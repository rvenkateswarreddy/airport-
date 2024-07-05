// app.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const airportRoutes = require("./routes/airport");
const cityRoutes = require("./routes/city");
const countryRoutes = require("./routes/country");

const app = express();
const port = process.env.PORT || 3010;

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://rvenkateswarreddy12345:airport@cluster0.ahvrrs9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// API routes
app.use("/api", airportRoutes);

// Serve static assets if in production

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
