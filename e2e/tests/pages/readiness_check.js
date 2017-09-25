module.exports = {
  url: function() { 
    return this.api.launchUrl+clientData.id+'/details'; 
  },
  
  elements: {

  	table: {
      selector: '.table-responsive', 
    },
	
		entityName: { 
      selector: 'h2', 
    },

    clientsButton: { 
      selector: '//a[text()="Clients"]', 
      locateStrategy: 'xpath' 
    },

    backButton: { 
      selector: '#backButton', 
    },
	}
}