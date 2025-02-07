const express = require("express");
const createProxy = require("../middleware/proxyMiddleware");
const { PAYMENT_SERVICE_URL } = require("../config/env.config");

const router = express.Router();

router.use("/payments", createProxy(PAYMENT_SERVICE_URL));

module.exports = router;
