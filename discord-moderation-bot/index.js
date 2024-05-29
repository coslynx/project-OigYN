const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is ready');
});

client.login('YOUR_DISCORD_BOT_TOKEN');