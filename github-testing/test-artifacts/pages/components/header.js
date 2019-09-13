const USER = require('../../data/test-data/credentials').USER
const BaseComponent = require('../base-component')

 class Header extends BaseComponent{

  constructor(){

    super({css : 'header.Header'})

    this.elements = {
      pullRequests: {css: '*[href=\'/pulls\']'},
      issues: {css: '*[href=\'/issues\']'},
      marketplace: {css: '*[href=\'/marketplace\']'},
      explore: {css: '*[href=\'/explore\']'},
      bellBtn: {css: 'svg.octicon.octicon-bell'},
      searchField: {css: '.header-search-input'},
      addBtn: {css: 'summary[aria-label = \'Create new…\'] .dropdown-caret'},
      avatarIcon: {xpath: `//*[@alt='@${USER.USERNAME}']`},
      dropDownMenu: {css: 'summary[aria-label=\'View profile and more\'] .dropdown-caret'},
      signInButton: {xpath: '//a[@href=\'/login\']'},
      newRepoBtn: {css: 'a.dropdown-item[href=\'/new\']'},
      signOutBtn: {css: '.dropdown-signout'},
      yourProfileBtn: {css: 'a[data-ga-click=\'Header, go to profile, text:your profile\']'}
    }
  }

 }

 module.exports = Header