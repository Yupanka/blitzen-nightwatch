import logindata from '../testdata/logindata.js';
import clientdata from '../testdata/clientdata.js';

export default {

  before : (client) => {
    const loginPage = client.page.login();
    const menuPage = client.page.menu();
    const clientsPage = client.page.clients();

    loginPage
      .navigate()
      .signIn(logindata.username, logindata.password);

    clientsPage
      .waitForElementPresent('@clientsTable', 25000);

    client.windowMaximize('current');
  },

  after : (client) => {
    client.end();
  },
/*
  'Clients Page: UI test' : (client) => {
    const clientsPage = client.page.clients();
    const menuPage = client.page.menu();

    client.pause(1000);

    clientsPage
      .verify.visible('@clientsTable')
      .verify.visible('@clientRow');

    menuPage
      .verify.containsText('@username', logindata.user)
      .verify.visible('@backButton')
      .verify.visible('@search')
      .click('@username')
      .waitForElementVisible('@logOut', 5000)
      .verify.visible('@logOut');
  },

  'Clients Page: verify navigation to Client Details and back' : (client) => {
    const clientsPage = client.page.clients();
    const menuPage = client.page.menu();
    const detailsPage = client.page.client_details();
    const clientInfo = detailsPage.section.clientInfo;

    client.pause(1000);

    clientsPage.goToTestClient();

    clientInfo.expect.element('@apiKey').to.be.visible.before(5000);
    
    client.verify.title('Blitzen : '+ clientdata.name +' Dashboard | Healthcaresource');
      
    menuPage.goToClients();

    clientsPage
      .waitForElementVisible('@clientsTable', 5000)
      .verify.title('Blitzen : Clients | Healthcaresource');
  },
  */

  'Clients Page: Search for the client in Menu searchbar' : (client) => {
    const menuPage = client.page.menu();
    const clientsPage = client.page.clients();
    const detailsPage = client.page.client_details();
    const clientInfo = detailsPage.section.clientInfo;

    menuPage
      .searchFor(clientdata.id)
      .assert.visible('@moreResults')
    // Fancy way to count items returned by search
      // .assert.visible('ol.panel.panel-default:nth-child(2)')
      // .assert.elementNotPresent('ol.panel.panel-default:nth-child(3)');

    client.elements('css selector', menuPage.elements.items.selector, (res) => {
      clien
        .assert.equal(res.value.length, 1)
        .click()

    });

    client.pause(2000)

    menuPage.click('@firstSearchResult');

    clientInfo.expect.element('@clientName').text.to.contain(clientdata.name).before(5000);

    menuPage.goBack();

    clientsPage
      .waitForElementVisible('@clientsTable', 5000)
      .verify.title('Blitzen : Clients | Healthcaresource');

  },

  'Clients Page: Filter clients' : (client) => {
    const clientsPage = client.page.clients();

    clientsPage.filterClients(clientdata.id);

    client
    .pause(1000)
    .elements('css selector', clientsPage.elements.clientRow.selector, (res) => {
      client.assert.equal(res.value.length, 1);
    });
  }

};
