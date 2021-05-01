const PuppeteerEnvironment = require('jest-environment-puppeteer');
const { addAttach } = require('jest-html-reporters/helper');

/**
 * @tutorial https://github.com/smooth-code/jest-puppeteer#extend-puppeteerenvironment
 */
class E2EEnvironment extends PuppeteerEnvironment {
  async handleTestEvent(event, state) {
    if (event.name === 'test_fn_failure') {
      const data = await this.global.page.screenshot();

      await addAttach(data, 'Full Page Screenshot', this.global);
    }
  }
}

module.exports = E2EEnvironment;
