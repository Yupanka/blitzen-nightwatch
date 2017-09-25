const loginCommands = {  
  signIn(username, password) {
    return this
      .waitForElementVisible('@username', 10000)
      .setValue('@username', username)
      .setValue('@password', password)
      .waitForElementVisible('@loginButton', 1000)
      .click('@loginButton')
      .waitForElementNotPresent('@username', 10000)
  },
};

export default {  

  url: function() { 
    return this.api.launchUrl; 
  },

  commands: [loginCommands],
  
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
};
