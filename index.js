// Import the discord.js module
const Discord = require("discord.js");

// Create an instance of Discord that we will use to control the bot
const client = new Discord.Client();

// Import the fs module (file operations)
const fs = require('fs');

// Token for your bot
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

// Import settings json
const settings = require("./settings.json");

// Store config in new variable
const bot = require('./src/bot.js');
const Bot = new bot(config);

// Log bot in using token
client.login(config.token);

// Message to indicate successful launch
client.on('ready', () => {
        console.log('First Discord Bot is running... ');
});

var prefix = (settings.server.prefix)
client.on('message', (message) => {
        if (message.author === client.user) return;
        if (message.content.startsWith(prefix + "ping")) {
        message.channel.send(":ping_pong: | Pong. " + message.client.ping + "ms ");
        
        }
});

client.on('message', (message) => {
        if (message.author === client.user) return;
        if (message.content.startsWith(prefix + "help")) {
        message.channel.send(":robot:  | Beep Boop Bop I'm A Bot!");
        
        }
});

client.on('message', (message) => {
        if (message.author === client.user) return;
        if (message.content.startsWith(prefix + "bye")) {
        message.channel.send(":wave:    (っ´▽`) ╯" );
        
        }
});