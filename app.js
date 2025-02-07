const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/env.config");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/payRoutes");

const app = express();

// Middleware
// app.use(cors());

// Routes
app.use(authRoutes);
app.use(productRoutes);
app.use(orderRoutes);
app.use(paymentRoutes);

// Default error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;