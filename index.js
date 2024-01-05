const cron = require('node-cron');
const trackerData = require('./trackerData.js');
const scrapeData = require("./scrapeData.js")
const databaseHandler = require("./databaseHandler.js")
const currencyStringToNumberInGbp = require("./currencyConversions.js");

async function runApp() {
    cron.schedule('0 0 * * *', () => {
        startApp()
    });
}

async function startApp() {
    for (let entry of trackerData) {
        const priceString = await scrapeData.getHTML(entry.productPage, entry.identifier);
        const currentPrice = await currencyStringToNumberInGbp(priceString);
        databaseHandler.writeToDb(entry.id, currentPrice)
    }
}

runApp()
