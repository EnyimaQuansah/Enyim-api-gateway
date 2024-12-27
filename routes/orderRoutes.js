const express = require("express");
const createProxy = require("../middleware/proxyMiddleware");
const { ORDER_SERVICE_URL } = require("../config/env.config");

const router = express.Router();

router.use("/orders", createProxy(ORDER_SERVICE_URL));

module.exports = router;
