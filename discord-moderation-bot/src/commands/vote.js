const Discord = require('discord.js');

module.exports = {
    name: 'vote',
    description: 'Start a vote on a specific topic.',
    execute(message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply('You do not have the necessary permissions to start a vote.');
        }

        const voteTopic = args.join(' ');
        if (!voteTopic) {
            return message.reply('Please provide a topic for the vote.');
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('🗳️ Vote Started')
            .setDescription(`**Topic:** ${voteTopic}\nReact with ✅ to vote yes, ❌ to vote no.`)
            .setTimestamp();

        message.channel.send(embed)
            .then(voteMessage => {
                voteMessage.react('✅')
                    .then(() => voteMessage.react('❌'))
                    .catch(err => console.error('Failed to react with emojis: ', err));
            })
            .catch(err => console.error('Failed to send vote message: ', err));
    },
};