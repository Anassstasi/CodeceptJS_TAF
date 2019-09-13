const USER = require('../../data/test-data/credentials').USER
const BaseComponent = require('../base-component')
const { I } = inject();

 class Header extends BaseComponent{

  constructor(){

    super({css : '.footer'})

    this.elements = {
      
    }
  }
  
 }

 module.exports = Header