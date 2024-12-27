require("dotenv").config();

module.exports = {
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL || "http://auth-service:3000",
  PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL || "http://product-service:3000",
  ORDER_SERVICE_URL: process.env.ORDER_SERVICE_URL || "http://order-service:3000",
  PORT: process.env.PORT || 8000,
};
