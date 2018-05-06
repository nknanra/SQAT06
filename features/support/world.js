const { setWorldConstructor, setDefaultTimeout } = require('cucumber')

setDefaultTimeout(90 * 1000);
const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };

class CustomWorld {
  constructor({attach, parameters}) {
    this.browser = webdriverio.remote(options);
    this.attach = attach;
  }

  goToWebsite() {
    return this.browser.init().url('https://google.com/');
  }
}

setWorldConstructor(CustomWorld)
