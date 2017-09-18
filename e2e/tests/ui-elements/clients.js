var clientData = require('../testdata/clientdata.js');

module.exports = {
  url: function() { 
    return this.api.launchUrl+'clients/'; 
  },
  
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

    clientsTable: { 
      selector: '.table-responsive'
    },

    clientRow: { 
      selector: '.client-link'
    },

    testclient: { 
      selector: '//tr/td[text()="'+clientData.id+'"]', 
      locateStrategy: 'xpath' 
    },

}

/*
    username: '#CurrentUser',
    logOut: '.fa.fa-sign-out',
    clientsButton: '"link text", "Clients"',
    backButton: '#backButton',
    clientsTable: '.table-responsive',
    clientRow: '.client-link',
    testclient: '//tr/td[text()="'+clientData.id+'"]'
*/
};
