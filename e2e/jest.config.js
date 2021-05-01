const CI_CONFIG = require.resolve('./jest-puppeteer.config');
const DEBUG_CONFIG = require.resolve('./jest-puppeteer.config.override');
const WATCH_MODE = process.argv.includes('--watch');

process.env.JEST_PUPPETEER_CONFIG = WATCH_MODE ? DEBUG_CONFIG : CI_CONFIG;

module.exports = {
  preset: './preset.js',
  testRunner: 'jest-circus/runner',
  testEnvironment: '<rootDir>/environment.js',
  testMatch: ['<rootDir>/specs/**/*.spec.ts'],
  testTimeout: 20000,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  verbose: true,
  maxWorkers: WATCH_MODE ? 1 : 4,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports/e2e',
        filename: 'index.html',
      },
    ],
  ],
};
