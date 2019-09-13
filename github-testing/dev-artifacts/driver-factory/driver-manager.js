const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

class DriverManager extends codecept_helper {

    /**
     * Gets the instance of webdriver
     */
    getDriver() {
        return this.helpers['WebDriver'].browser
    }

    /**
     * Waits till the page is loaded.
     */
    async waitForPageLoad(){
        await this.getDriver().waitUntil(async() => {
            return await this.isPageLoaded()
          }, 100000, `pageLoaded timeout`, 500)
    }

    /**
     * Checks whether the page is loaded.
     * 
     * @return true if it is loaded and false if not.
     */
    async isPageLoaded(){
        return await this.getPageReadyState() === `complete`
    }

    /**
     * Gets the state of the page.
     * 
     * @return the state of the page.
     */
    async getPageReadyState(){
        return await this.getDriver().execute(`return document.readyState`)
    }

    /**
     * Opens the url in a browser.
     * 
     * @param {*} url The url which should be opened.
     */
    async url(url){
        await this.getDriver().url(url)
        logger.info('Opens URL [ ' + url + ' ]')
    }

}
  
module.exports = DriverManager