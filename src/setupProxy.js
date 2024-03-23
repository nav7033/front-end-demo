const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://nodecodeeevoluction-demo.onrender.com', // Your backend server URL
      changeOrigin: true,
    })
  );
}