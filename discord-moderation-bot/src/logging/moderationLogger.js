const fs = require('fs');
const path = require('path');

const moderationLogger = {
  logAction: (action, user, reason) => {
    const logMessage = `${new Date().toISOString()} - ${action} - User: ${user} - Reason: ${reason}\n`;
    const logFilePath = path.join(__dirname, 'moderation.log');
    
    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Error logging action:', err);
      }
    });
  }
};

module.exports = moderationLogger;