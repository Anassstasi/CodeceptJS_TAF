const DriverManager = require("../../dev-artifacts/driver-factory/driver-manager")
const PageUtils = require('../../dev-artifacts/utils/page-util')
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
let driver = new DriverManager()
const { I } = inject()

class BasePage {

    constructor(pageUrl) {
        this.pageUrl = pageUrl
    }
    
  /**
   * Checks presence of the element of the component.
   * 
   * @param component page component.
   * @param element component`s element.
   */
  async see(component, element) {
    let elem = this.getCurrentElement(component, element)
    await I.seeElement(elem)
    logger.info('The element is visible on the page.')
   }

  /**
   * clicks on the element of the component.
   * 
   * @param component page component.
   * @param element component`s element.
   */
  async click(component, element) {
    let elem = this.getCurrentElement(component, element)
    await I.click(elem)
    logger.info('The element is clicked.')
   }

    /**
     * Gets the title of the page.
     * 
     * @returns page title.
     */
    async getTitle() {
      pageTitle = await driver.execute(`return document.title`)
      logger.info('Page title : [ ' + pageTitle + ' ]')
      return pageTitle
    }
    
    /**
     * Checks whether the right page is opened.
     * 
     * @returns true if it is and false if not.
     */
    async isCorrectPageOpened() {
      let currentURL = await PageUtils.getURL()
      return currentURL.indexOf(this.pageUrl)!== -1
    }

    /**
     * Gets the element of the comonent if exists or the element of the page if there are no component.
     * 
     * @param {String} component page component (like footer, header and etc.). In case there are no component it`s an element of the page.
     * @param {String} element component element.
     */
     getCurrentElement(component, element) {
      if (element) {
        return this.elements[component].elements[element]
      }
      else {
        return this.elements[component]
      } 
     }
   }
  
   module.exports = BasePage