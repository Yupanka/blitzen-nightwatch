var loginData = require('../testdata/logindata.js');

module.exports = {
  before : function(client) {
    const loginPage = client.page.login();

    loginPage.navigate()
      .waitForElementVisible('@username', 25000);
  },

  beforeEach : function(client) {
    const loginPage = client.page.login();
    
    loginPage
      .clearValue('@username')
      .clearValue('@password');
  },

  after : function(client) {
    client.end();
  },

  'Login Page: UI test' : function (client) {
    const loginPage = client.page.login();

    loginPage
      .verify.containsText('@appTitle', "Blitzen")
      .verify.visible('@username')
      .verify.visible('@password')
      .verify.visible('@loginButton')
      .expect.element('@error').to.not.be.present;
  },

  'Login Page: verify error for invalid login': function (client) {
    const loginPage = client.page.login();

    loginPage
      .setValue('@username', loginData.invalidLogin)
      .setValue('@password', loginData.password)
      .click('@loginButton');

    loginPage.expect.element('@error').to.be.visible.before(5000);
  },

  'Login Page: verify error for invalid password': function (client) {
    const loginPage = client.page.login();

    loginPage
      .setValue('@username', loginData.username)
      .setValue('@password', loginData.invalidPassword)
      .click('@loginButton');

    loginPage.expect.element('@error').to.be.visible.before(5000);
  },

  'Login: verify successful sign in with correct credentials' : function (client) {
    const loginPage = client.page.login();
    const clientsPage = client.page.clients();

    loginPage
      .setValue('@username', loginData.username)
      .setValue('@password', loginData.password)
      .click('@loginButton');

    client.expect.element('.table-responsive').to.be.visible.before(15000);
  }
  
};
