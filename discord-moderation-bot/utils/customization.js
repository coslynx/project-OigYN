const fs = require('fs');

const readCustomizationSettings = () => {
    try {
        const data = fs.readFileSync('customization.json');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading customization settings:', error);
        return {};
    }
};

const updateCustomizationSettings = (newSettings) => {
    try {
        fs.writeFileSync('customization.json', JSON.stringify(newSettings, null, 2));
        console.log('Customization settings updated successfully');
    } catch (error) {
        console.error('Error updating customization settings:', error);
    }
};

module.exports = {
    readCustomizationSettings,
    updateCustomizationSettings
};