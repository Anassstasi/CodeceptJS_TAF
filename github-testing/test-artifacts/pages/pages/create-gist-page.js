const { I } = inject()
const BasePage = require("../base-page")
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';


class CreateGistPage extends BasePage {

  constructor() {
    super("/")

    this.elements = {
      gistNameField: {css: '.gist-filename-input'},
      gistDescriptionField: {css: 'gist[description]'},
      createPublicGistBtn: {css: 'button[class=\'btn js-gist-create \']'}
    }
  }
  
  /**
   * Creates new gist.
   * 
   * @param name name of the gist.
   * @param description description of the gist. 
   */
  async createNewGist(name, description) {
    await I.fillField(this.elements.gistNameField, name)
    await I.fillField(this.elements.gistDescriptionField, description)
    await I.click(this.elements.createPublicGistBtn)
    logger.info('Repo`s name:[ ' + name + ' ]; repo`s description:[ ' + description + ' ]');
   }

 }

 module.exports = CreateGistPage;
