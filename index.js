const cron = require('node-cron');
const trackerData = require('./trackerData.js');
const scrapeData = require("./scrapeData.js")
const currencyStringToNumberInGbp = require("./currencyConversions.js");

async function runApp() {
    for (const entry of trackerData) {
        const html = await scrapeData.getHTML(entry.productPage);
        const priceString = scrapeData.scrapePrice(html, entry.identifier)
        const currentPrice = await currencyStringToNumberInGbp(priceString);
        console.log("--------------")
        console.log(entry.name)
        console.log(priceString)
        console.log(currentPrice)
    }
}

runApp()
