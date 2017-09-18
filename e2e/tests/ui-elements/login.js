module.exports = {
  url: function() { 
    return this.api.launchUrl; 
  },
  
  elements: {

    loginForm: { 
      selector: '.m-t'
    },

    username: { 
      selector: '[type="email"]'
    },

    password: { 
      selector: '[type="password"]'
    },

    appTitle: { 
      selector: 'h3'
    },

    error: { 
      selector: '.alert.alert-danger'
    },

    loginButton: { 
      selector: '[type="button"]'
    }
}




/*

    loginForm: '.m-t',
    username: '[type="email"]',
    password: '[type="password"]',
    loginButton: '[type="button"]',
    appTitle: 'h3',
    error: '.alert.alert-danger'
    */
};
