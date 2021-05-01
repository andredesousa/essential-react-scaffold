module.exports = {
  server: {
    command: 'npm run serve',
    debug: false,
    host: 'localhost',
    launchTimeout: 60000,
    port: 3000,
  },
  launch: {
    args: ['--window-size=1920,1080', '--disable-extensions', '--disable-dev-shm-usage'],
    defaultViewport: null,
    devtools: false,
    dumpio: true,
  },
};
