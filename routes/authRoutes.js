const express = require("express");
const createProxy = require("../middleware/proxyMiddleware");
const { AUTH_SERVICE_URL } = require("../config/env.config");

const router = express.Router();

router.use("/auth", createProxy(AUTH_SERVICE_URL));
router.use("/profile", createProxy(AUTH_SERVICE_URL));

module.exports = router;
