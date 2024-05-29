const profanityFilter = (message) => {
    const profanityWords = ['badword1', 'badword2', 'badword3']; // List of profanity words to filter
    const cleanMessage = message.content.toLowerCase(); // Convert message to lowercase for case-insensitive comparison

    for (const word of profanityWords) {
        if (cleanMessage.includes(word)) {
            message.delete(); // Delete the message if it contains profanity
            message.channel.send(`${message.author}, please refrain from using inappropriate language.`);

            // Log the moderation action
            const logger = require('../logging/moderationLogger');
            logger.logAction('Profanity Filter', message.author, message.content);

            break; // Stop checking for more profanity words once one is found
        }
    }
};

module.exports = {
    profanityFilter,
};