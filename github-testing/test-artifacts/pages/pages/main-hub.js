const Header = require('../components/header')
const BasePage = require("../base-page")
const { I } = inject()

class MainHub extends BasePage {

  constructor() {
    super("/")

    this.elements = {
      header : new Header()
    }
  }


 }

 module.exports = MainHub;
