const axios = require("axios");
const { AUTH_SERVICE_URL } = require("../config/env.config");

const handleTokens = async (req, res, next) => {
  const accessToken = req.headers["authorization"]?.split(" ")[1];
  const refreshToken = req.cookies.refresh_token;

  if (accessToken) {
    // If an access token is provided, forward the request
    req.accessToken = accessToken;
    return next();
  }

  if (refreshToken) {
    // If access token is missing, attempt to refresh using the refresh token
    try {
      const { data } = await axios.post(`${AUTH_SERVICE_URL}/refresh-token`, { refresh_token: refreshToken });
      if (data.access_token) {
        req.accessToken = data.access_token;
        res.cookie("refresh_token", data.refresh_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        return next();
      }
    } catch (err) {
      console.error("Failed to refresh token:", err);
    }
  }

  // If no valid tokens, return unauthorized
  return res.status(401).json({ error: "Unauthorized: Missing or invalid token" });
};

module.exports = handleTokens;
