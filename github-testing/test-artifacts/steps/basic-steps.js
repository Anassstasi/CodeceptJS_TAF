const Helper = codeceptjs.helper
const DriverManager = require("../../dev-artifacts/driver-factory/driver-manager")
let driver = new DriverManager()

class BasicSteps extends Helper {

  /**
   * Opens tha base url of the app.
   */
  async openApp() {
    await driver.url("")
  }

  /**
   * Waits till the page is loaded.
   */
  async waitForLoaded() {
    await driver.waitForPageLoad()
  }

}

module.exports = BasicSteps;
