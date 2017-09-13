var loginUI = require('../ui-elements/login.js');
var clientsUI = require('../ui-elements/clients.js');
var clientDetails = require('../ui-elements/client_details.js');
var loginData = require('../testdata/logindata.js');

module.exports = {
  before : function(browser) {
    browser
      .url(browser.launchUrl)
      .setValue(loginUI.username, loginData.username)
      .setValue(loginUI.password, loginData.password)
      .click(loginUI.loginButton)
      .waitForElementVisible(clientsUI.clientsTable, 25000)
      .windowMaximize('current');
  },

  after : function(browser) {
    browser.end();
  },

  'Clients Page: UI test' : function (browser) {
    browser
      .pause(1000)
      .verify.visible(clientsUI.clientsTable)
      .verify.visible(clientsUI.clientRow)
      .verify.containsText(clientsUI.username, loginData.user)
      .verify.visible(clientsUI.backButton)
      .click(clientsUI.username)
      .waitForElementVisible(clientsUI.logOut, 5000)
      .verify.visible(clientsUI.logOut);
  },

  'Clients Page: verify navigation to Client Details and back' : function (browser) {
    browser
      .pause(1000)
      .click(clientsUI.clientRow)
      .waitForElementVisible(clientDetails.apiKey, 5000)
      .verify.title('Blitzen - Client Details')
      .useXpath()
      .verify.visible(clientDetails.implementationView)
      .useCss()
      .click('link text', "Clients")
      .waitForElementVisible(clientsUI.clientsTable, 5000)
      .verify.title('Blitzen - Clients');
  },

  'Clients Page: verify logout' : function (browser) {
    browser
      .pause(1000)
      .click(clientsUI.username)
      .waitForElementVisible(clientsUI.logOut, 5000)
      .click(clientsUI.logOut)
      .waitForElementVisible(loginUI.loginForm, 5000)
      .assert.title('Blitzen Login');
  }
};
