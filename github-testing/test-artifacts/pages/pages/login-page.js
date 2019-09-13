const BasePage = require("../base-page")
const { I } = inject();
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

 class LoginPage extends BasePage {

  constructor(){
    super("login")

    this.elements = {
      email: {css: '#login_field'},
      password: {css: '#password'},
      submitButton : {css: '.btn-primary'},
      incorrectCredsMsg: {css: '#js-flash-container .flash-error'}
    }
  }

  /**
   * Logs in.
   * 
   * @param {*} email user`s email.
   * @param {*} password user`s password.
   */
  async logIn(email, password) {
    await I.fillField(this.elements.email, email)
    await I.fillField(this.elements.password, password)
    await I.click(this.elements.submitButton)
    logger.info('User logs in with EMAIL : [ ' + email + ' ], PASSWORD : [ ' + password + ' ]')
  }

 }

 module.exports = LoginPage