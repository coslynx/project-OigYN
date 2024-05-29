const Discord = require('discord.js');

module.exports = {
    name: 'welcome',
    description: 'Send a welcome message to new members',

    execute(message) {
        const channel = message.guild.channels.cache.find(channel => channel.name === 'welcome');
        if (!channel) return;

        channel.send(`Welcome to the server, ${message.author}! Feel free to introduce yourself and read the rules in the #rules channel.`);
    }
};