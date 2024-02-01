const emailjs = require('@emailjs/browser');
const env = require("./config/dev");
const trackerData = require("./trackerData");

function triggerEmail(templateID, templateParams, successMessage, errorMessage){
    emailjs.send('PriceTracker', templateID, templateParams, env.PUBLIC_KEY())
        .then(function(response) {
            console.log(successMessage);
        }, function(error) {
            console.log(errorMessage, error);
        });
}

function exportData(priceData) {
    let templateParams = {
        Date: new Date().toDateString(),
        PriceData: JSON.stringify(priceData)
    }
    triggerEmail(
        'template_qgbwzce',
        templateParams,
        'Email sent successfully',
        'EMAIL FAILED...'
    );
}

function sendErrorEmail(id) {
    let templateParams = {
        Date: new Date().toDateString(),
        Text: `There was an error scraping data for item ${id}, ${findNameByID(id)}.`
    }
    triggerEmail(
        'template_h5q2zve',
        templateParams,
        'Error Email sent successfully',
        'ERROR EMAIL FAILED...'
    );
}

function findNameByID(id){
    for (let i = 0; i < trackerData.length; i++) {
        if (trackerData[i]['id'] == id) {
            return trackerData[i]['name']
        }
    }
}

module.exports = {
    exportData: exportData,
    sendErrorEmail: sendErrorEmail
}