const BasePage = require("../base-page")
const USER = require('../../../test-artifacts/data/test-data/credentials').USER
const REPO = require('../../../test-artifacts/data/test-data/repo-data').REPO
const { I } = inject()

class NewRepoSetupPage extends BasePage {

  constructor() {
    super(`${USER.USERNAME}/${REPO.NAME}`)

    this.elements = {
      httpsRepoLink: {css: '#empty-setup-clone-url'}
    }
  }

 }

 module.exports = NewRepoSetupPage;
