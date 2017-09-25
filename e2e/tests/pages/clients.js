import clientdata from '../testdata/clientdata.js';

const clientsCommands = {

//TODO: refactor to be able to use any client
  goToTestClient() {
    return this
      .waitForElementVisible('@testclient', 2000)
      .click('@testclient')
  },

  filterClients(keyword) {
    return this
      .waitForElementVisible('@filterField', 2000)
      .setValue('@filterField', keyword)
  }
};

export default {
  url: function() { 
    return this.api.launchUrl+'clients/'; 
  },

  commands: [clientsCommands],
  
  elements: {

    clientsTable: { 
      selector: '.table-responsive'
    },

    clientRow: { 
      selector: '.client-link'
    },

    testclient: { 
      selector: '//tr/td[text()="'+clientdata.id+'"]', 
      locateStrategy: 'xpath' 
    },

    filterField: {
      selector: '.ibox-content > .hcs-controlled-input > span > .form-control'
    }
  }
};
