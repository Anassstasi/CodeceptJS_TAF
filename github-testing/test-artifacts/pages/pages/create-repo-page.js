const { I } = inject()
const BasePage = require("../base-page")
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';


class CreateRepoPage extends BasePage {

  constructor() {
    super("/new")

    this.elements = {
      repoNameField: {css: 'input#repository_name'},
      repoDescriptionField: {css: 'input#repository_description'},
      createRepoSubmitBtn: {css: 'button[data-disable-with=\'Creating repository…\']'},
      errorMsg: {css: '.error'}
    }
  }
  
  /**
   * Creates new repository.
   * 
   * @param name name of the repo.
   * @param description description of the repo. 
   */
  async createNewRepo(name, description) {
    await I.fillField(this.elements.repoNameField, name)
    await I.fillField(this.elements.repoDescriptionField, description)
    await I.click(this.elements.createRepoSubmitBtn)
    logger.info('Repo`s name:[ ' + name + ' ]; repo`s description:[ ' + description + ' ]');
   }

 }

 module.exports = CreateRepoPage;
