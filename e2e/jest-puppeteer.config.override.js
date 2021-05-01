const config = require('./jest-puppeteer.config');

module.exports = {
  ...config,
  server: {
    ...config.server,
    debug: true,
  },
  launch: {
    ...config.launch,
    headless: false,
    slowMo: 100,
  },
};
