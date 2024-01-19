const emailjs = require('@emailjs/browser');
const env = require("./config/dev");

function exportData(priceData) {
    let templateParams = {
        Date: new Date().toDateString(),
        PriceData: JSON.stringify(priceData)
    }

    emailjs.send('PriceTracker', 'template_qgbwzce', templateParams, env.PUBLIC_KEY())
    .then(function(response) {
        console.log('Email sent successfully');
    }, function(error) {
        console.log('EMAIL FAILED...', error);
    });
}

module.exports = {
    exportData: exportData
}