const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Display a list of available commands',

    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('List of Available Commands')
            .addFields(
                { name: '!kick', value: 'Kick a user from the server' },
                { name: '!ban', value: 'Ban a user from the server' },
                { name: '!mute', value: 'Mute a user for a specified period' },
                { name: '!warn', value: 'Issue a warning to a user' },
                { name: '!report', value: 'Report an issue to the moderators' },
                { name: '!role', value: 'Assign roles to users' },
                { name: '!welcome', value: 'Greet new members joining the server' },
                { name: '!help', value: 'Display a list of available commands' },
                { name: '!vote', value: 'Start a voting session' }
            );

        message.channel.send(embed);
    },
};