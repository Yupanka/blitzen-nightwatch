import logindata from '../testdata/logindata.js';

export default {

  before : (client) => {
    const loginPage = client.page.login();

    loginPage.navigate()
  },

  beforeEach : (client) => {
    const loginPage = client.page.login();
    
    loginPage
      .clearValue('@username')
      .clearValue('@password');
  },

  after : (client) => {
    client.end();
  },

  'Login Page: UI test' : (client) => {
    const loginPage = client.page.login();

    loginPage
      .verify.containsText('@appTitle', "Blitzen")
      .verify.visible('@username')
      .verify.visible('@password')
      .verify.visible('@loginButton')
      .expect.element('@error').to.not.be.present;
  },

  'Login Page: verify error for invalid login': (client) => {
    const loginPage = client.page.login();

    loginPage
      .signIn(logindata.invalidLogin, logindata.password)
      .expect.element('@error').to.be.visible.before(5000);
  },

  'Login Page: verify error for invalid password': (client) => {
    const loginPage = client.page.login();

    //need this pause to catch the error for second test with invalid credentials
    client.pause(2000);

    loginPage
      .signIn(logindata.username, logindata.invalidPassword)
      .expect.element('@error').to.be.visible.before(5000);
  },

  'Login: verify successful sign, log out and sign in again' : (client) => {
    const loginPage = client.page.login();
    const clientsPage = client.page.clients();
    const menuPage = client.page.menu();

    loginPage.signIn(logindata.username, logindata.password);
    clientsPage.expect.element('@clientsTable').to.be.visible.before(15000);

    menuPage.logOut();

    client.pause(2000);

    loginPage.signIn(logindata.username, logindata.password);
    clientsPage.expect.element('@clientsTable').to.be.visible.before(15000);
  }
};
