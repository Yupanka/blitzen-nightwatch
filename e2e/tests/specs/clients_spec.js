var loginData = require('../testdata/logindata.js');

module.exports = {

  before : function(client) {
    const detailsPage = client.page.client_details();
    const clientsPage = client.page.clients();
    const loginPage = client.page.login();

    loginPage.navigate()
      .setValue('@username', loginData.username)
      .setValue('@password', loginData.password)
      .click('@loginButton');

    clientsPage
      .waitForElementVisible('@clientsTable', 25000);

    client.windowMaximize('current');
  },

  after : function(client) {
    client.end();
  },

  'Clients Page: UI test' : function (client) {
    const clientsPage = client.page.clients();

    client.pause(1000);
    clientsPage
      .verify.visible('@clientsTable')
      .verify.visible('@clientRow')
      .verify.containsText('@username', loginData.user)
      .verify.visible('@backButton')
      .click('@username')
      .waitForElementVisible('@logOut', 5000)
      .verify.visible('@logOut');
  },

  'Clients Page: verify navigation to Client Details and back' : function (client) {
    const detailsPage = client.page.client_details();
    const clientsPage = client.page.clients();

    client.pause(1000);
    clientsPage.click('@clientRow');
    detailsPage
      .waitForElementVisible('@apiKey', 5000)
      .verify.title('Blitzen - Client Details')
      .verify.visible('@implementationView')
      .click('@clientsButton');

    clientsPage
      .waitForElementVisible('@clientsTable', 5000)
      .verify.title('Blitzen - Clients');
  },

  'Clients Page: verify logout' : function (client) {
    const clientsPage = client.page.clients();
    const loginPage = client.page.login();

    client.pause(1000);

    clientsPage
      .click('@username')
      .waitForElementVisible('@logOut', 5000)
      .click('@logOut');

    loginPage
      .waitForElementVisible('@loginForm', 5000)
      .assert.title('Blitzen Login');
  }
};
