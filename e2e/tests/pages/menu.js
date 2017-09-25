import clientdata from '../testdata/clientdata.js';

const menuCommands = {

  logOut() {
    return this
      .waitForElementVisible('@username', 2000)
      .click('@username')
      .waitForElementVisible('@logOut', 2000)
      .click('@logOut')
  },

  goBack() {
    return this
      .waitForElementVisible('@backButton', 2000)
      .click('@backButton')
  },

  goToClients() {
    return this
      .waitForElementVisible('@clientsButton', 2000)
      .click('@clientsButton')
  },

  searchFor(keyword) {
    return this
      .waitForElementVisible('@search', 2000)
      .setValue('@search', keyword)
      .waitForElementVisible('@searchResults', 2000)
  }
};

export default {

  commands: [menuCommands],
  
  elements: {

    username: { 
      selector: '#CurrentUser'
    },

    logOut: { 
      selector: '.fa.fa-sign-out'
    },

    backButton: { 
      selector: '#backButton'
    }, 

    clientsButton: { 
      selector: '//a[text()="Clients"]', 
      locateStrategy: 'xpath' 
    },

    search: {
      selector: 'div[class="hcs-search-box"] > div > span > input[type="text"]'
    },

    searchResults: {
      selector: 'ol.panel.panel-default'
    },

    items: {
      selector: 'li[class="small-card "]'
    },

    moreResults: {
      selector: '.small-card.more-results-link'
    },

    firstSearchResult: {
      selector: 'ol.panel.panel-default:nth-child(2)'
    }
  },
/*
  sections: {

    searchResults: {
      selector: 'ol.panel.panel-default',
      
      elements: {
        
        items: {
          selector: 'li[class="small-card "]'
        },

        moreResults: {
          selector: '.small-card.more-results-link'
        }
      }
    },

  }
  */
};
