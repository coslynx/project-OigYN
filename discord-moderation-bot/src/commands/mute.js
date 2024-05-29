const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'Mute a user for a specified period of time',
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.reply('You do not have the required permissions to mute users.');
        }

        const target = message.mentions.users.first();
        if (!target) {
            return message.reply('Please specify a user to mute.');
        }

        const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

        if (!muteRole) {
            return message.reply('Could not find the Muted role. Please create it before using the mute command.');
        }

        const muteTime = args[1];
        if (!muteTime) {
            return message.reply('Please specify a valid mute duration.');
        }

        const muteDuration = parseInt(muteTime)*60000; // Convert minutes to milliseconds

        const member = message.guild.members.cache.get(target.id);

        member.roles.add(muteRole);
        message.channel.send(`<@${member.id}> has been muted for ${muteTime} minutes.`);

        setTimeout(() => {
            member.roles.remove(muteRole);
            message.channel.send(`<@${member.id}> has been unmuted after ${muteTime} minutes.`);
        }, muteDuration);
    },
};