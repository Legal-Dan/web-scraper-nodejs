const cron = require('node-cron');
const trackerData = require('./trackerData.js');
const scrapeData = require("./scrapeData.js")
const databaseHandler = require("./databaseHandler.js")
const currencyStringToNumberInGbp = require("./currencyConversions.js");

async function runApp() {
    for (let entry of trackerData) {
        const priceString = await scrapeData.getHTML(entry.productPage, entry.identifier);
        const currentPrice = await currencyStringToNumberInGbp(priceString);
        console.log("--------------")
        console.log(entry.name)
        console.log(priceString)
        console.log(currentPrice)
        databaseHandler.writeToDb(entry.id, currentPrice)
    }
}

runApp()
