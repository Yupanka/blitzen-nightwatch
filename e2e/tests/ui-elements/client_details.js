var clientData = require('../testdata/clientdata.js');

module.exports = {
  url: function() { 
    return this.api.launchUrl+clientData.id+'/details'; 
  },
  
  elements: {

    apiKey: { 
      selector: '#apiKey'
    },

    username: { 
      selector: '#CurrentUser'
    },

    logOut: { 
      selector: '.fa.fa-sign-out'
    },

    backButton: { 
      selector: '#backButton'
    },

    actionsButtons: { 
      selector: '.btn-toolbar'
    },

    actionsDropdown: { 
      selector: '.dropdown-menu'
    },

    clientsButton: { 
      selector: '//a[text()="Clients"]', 
      locateStrategy: 'xpath' 
    },

    clientName: { 
      selector: '//div[@class="ibox-content"]/div/div/h2[text()="'+clientData.name+'"]', 
      locateStrategy: 'xpath' 
    },

    clientId: { 
      selector: '//dd[text()="'+clientData.id+'"]', 
      locateStrategy: 'xpath' 
    },

    implementationView: { 
      selector: '//div[@class="ibox-content"]/div/div/h2/span[text()="Implementation Readiness"]/ancestor::div[@class="ibox-content"]', 
      locateStrategy: 'xpath' 
    },

    entities: { 
      selector: '//div[@class="ibox-content"]/div/div[2]/div[@class="row"]/div[2]/div[@class="row"]', 
      locateStrategy: 'xpath' 
    },

    jobs: { 
      selector: '//h5[text()="Jobs"]/ancestor::div[@class="row"]', 
      locateStrategy: 'xpath' 
    },

    candidates: { 
      selector: '//h5[text()="Candidates"]/ancestor::div[@class="row"]', 
      locateStrategy: 'xpath' 
    },

    users: { 
      selector: '//h5[text()="Users"]/ancestor::div[@class="row"]', 
      locateStrategy: 'xpath' 
    },

    listsBusiness: { 
      selector: '//h5[text()="Lists: Business Entities"]/ancestor::div[@class="row"]', 
      locateStrategy: 'xpath' 
    },

    listsOther: { 
      selector: '//h5[text()="Lists: Other"]/ancestor::div[@class="row"]', 
      locateStrategy: 'xpath' 
    },

    legend: { 
      selector: '//h5[text()="Legend"]/ancestor::div', 
      locateStrategy: 'xpath' 
    },

    sync: { 
      selector: '//a[text()="Sync"]', 
      locateStrategy: 'xpath' 
    },

    reindex: { 
      selector: '//a[text()="Re-Index"]', 
      locateStrategy: 'xpath' 
    },

    readinessCheck: { 
      selector: '//a[text()="Readiness Check"]', 
      locateStrategy: 'xpath' 
    },

  }

/*
  apiKey: '//*[@id="apiKey"]',
  username: '//*[@id="CurrentUser"]',
  logOut: '.fa.fa-sign-out',
  clientsButton: '//a[text()="Clients"]',
  backButton: '//*[@id="backButton"]',
  clientName: '//div[@class="ibox-content"]/div/div/h2[text()="'+clientData.name+'"]',
  clientId: '//dd[text()="'+clientData.id+'"]',
  implementationView: '//div[@class="ibox-content"]/div/div/h2/span[text()="Implementation Readiness"]/ancestor::div[@class="ibox-content"]',
  entities: '//div[@class="ibox-content"]/div/div[2]/div[@class="row"]/div[2]/div[@class="row"]',
  jobs: '//h5[text()="Jobs"]/ancestor::div[@class="row"]',
  candidates: '//h5[text()="Candidates"]/ancestor::div[@class="row"]',
  users: '//h5[text()="Users"]/ancestor::div[@class="row"]',
  listsBusiness: '//h5[text()="Lists: Business Entities"]/ancestor::div[@class="row"]',
  listsOther: '//h5[text()="Lists: Other"]/ancestor::div[@class="row"]',
  legend: '//h5[text()="Legend"]/ancestor::div',
  actionsButtons: '//*[@class="dropdown-toggle btn btn-default"]',
  percentage: '/div[2]/div/div/div/h3/span',
  actionsDropdown: '//ul[@class="dropdown-menu"]',
  sync: '//a[text()="Sync"]',
  reindex: '//a[text()="Re-Index"]',
  readinessCheck: '//a[text()="Readiness Check"]'
  */
};
