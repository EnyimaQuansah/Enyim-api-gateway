const express = require("express");
const createProxy = require("../middleware/proxyMiddleware");
const { PRODUCT_SERVICE_URL } = require("../config/env.config");

const router = express.Router();

router.use("/products", createProxy(PRODUCT_SERVICE_URL));

module.exports = router;
