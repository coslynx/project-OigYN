const Discord = require('discord.js');

module.exports = {
    name: 'warn',
    description: 'Warn a user for breaking server rules',
    execute(message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.reply('You do not have permission to use this command.');
        }

        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('You need to mention a user to warn.');
        }

        if (user.bot) {
            return message.reply('You cannot warn bots.');
        }

        const reason = args.slice(1).join(' ');

        if (!reason) {
            return message.reply('You must provide a reason for the warning.');
        }

        const warnEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('User Warned')
            .addField('User', user)
            .addField('Moderator', message.author)
            .addField('Reason', reason)
            .setTimestamp();

        const warnChannel = message.guild.channels.cache.find(channel => channel.name === 'warnings');
        if (!warnChannel) {
            return message.reply('Could not find a channel to send the warning.');
        }

        warnChannel.send(warnEmbed);

        message.reply(`Successfully warned ${user} for: ${reason}`);
    },
};