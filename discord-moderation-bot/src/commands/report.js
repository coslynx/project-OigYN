const Discord = require('discord.js');

module.exports = {
    name: 'report',
    description: 'Report an issue to the moderators.',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('You need to tag a user in order to report them.');
        }

        const reportTarget = message.mentions.users.first();
        const reportReason = args.slice(1).join(' ');

        const reportEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('User Report')
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`Reported user: ${reportTarget}\nReported by: ${message.author}\nReason: ${reportReason}`)
            .setTimestamp();

        const reportChannel = message.guild.channels.cache.find(channel => channel.name === 'reports');
        if (!reportChannel) return message.channel.send('Could not find a reports channel.');

        reportChannel.send(reportEmbed);
        message.channel.send('Your report has been submitted. Thank you for helping us keep the server safe.');
    }
};