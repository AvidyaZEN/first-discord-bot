const discord = require('discord.js');

class ZENfrags extends discord.Client {
    constructor(config) {
      super({
        disabledEvents: ['TYPING_START']
      });
      this.config = config;
    }
  
    login(token) {
      super.login(token);
    }
  }
  
  module.exports = ZENfrags;