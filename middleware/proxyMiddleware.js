const { createProxyMiddleware } = require("http-proxy-middleware");

const createProxy = (target) => {
  return createProxyMiddleware({
    target,
    changeOrigin: true, // Ensure Host header matches the target
    onProxyReq: (proxyReq, req) => {
      console.log(`Proxying request to: ${target}${req.url}`);
    },
  });
};

module.exports = createProxy;
