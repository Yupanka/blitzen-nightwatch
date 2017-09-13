var loginUI = require('../ui-elements/login.js');
var loginData = require('../testdata/logindata.js');

module.exports = {
  before : function(browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(loginUI.username, 25000);
  },

  beforeEach : function(browser) {
    browser
      .clearValue(loginUI.username)
      .clearValue(loginUI.password);
  },

  after : function(browser) {
    browser.end();
  },

  'Login Page: UI test' : function (browser) {
    browser
      .verify.containsText(loginUI.appTitle, "Blitzen")
      .verify.visible(loginUI.username)
      .verify.visible(loginUI.password)
      .verify.visible(loginUI.loginButton)
  },

  'Login Page: verify error for invalid login': function (browser) {
    browser
      .setValue(loginUI.username, loginData.invalidLogin)
      .setValue(loginUI.password, loginData.password)
      .click(loginUI.loginButton);
    browser.expect.element(loginUI.error).to.be.visible.before(5000);
  },

  'Login Page: verify error for invalid password': function (browser) {
    browser
      .setValue(loginUI.username, loginData.username)
      .setValue(loginUI.password, loginData.invalidPassword)
      .click(loginUI.loginButton);
    browser.expect.element(loginUI.error).to.be.visible.before(5000);
  },

  'Login: verify successful sign in with correct credentials' : function (browser) {
    browser
      .setValue(loginUI.username, loginData.username)
      .setValue(loginUI.password, loginData.password)
      .click(loginUI.loginButton);
    browser.expect.element('.table-responsive').to.be.visible.before(15000);
  }
};
