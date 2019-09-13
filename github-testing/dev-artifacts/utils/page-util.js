 const DriverManager = require("../driver-factory/driver-manager")
 const log4js = require('log4js');
 const logger = log4js.getLogger();
 logger.level = 'debug';

 let driver = new DriverManager()

 class PageUtil {
    /**
     * Gets the URL of the page.
     * 
     * @returns page URL.
     */
    static async getURL() {
        url = await driver.getDriver().execute(`return document.URL`)
        logger.info('Current page URL: [ ' + url + ' ]')
        return url
      }

 }

 module.exports = PageUtil