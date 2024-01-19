const cron = require('node-cron');
const trackerData = require('./trackerData.js');
const scrapeData = require("./scrapeData.js")
const databaseHandler = require("./storageHandler.js")
const currencyConversions= require("./currencyConversions.js");

async function runApp() {
    console.log("Starting application...")
    await startApp()
    console.log("Scraping complete")
    cron.schedule('0 0 * * *', () => {
        startApp()
    });
}

async function startApp() {
    console.log("Beginning scrape...")
    let counter = 0
    for (let entry of trackerData) {
        counter++
        console.log("Working on item " + counter)
        const priceString = await scrapeData.getHTML(entry.productPage, entry.identifier);
        const currentPrice = await currencyConversions.currencyStringToNumberInGbp(priceString);
        databaseHandler.writeToStorage(entry.id, currentPrice)
    }
    databaseHandler.exportPriceData()
}

runApp()
