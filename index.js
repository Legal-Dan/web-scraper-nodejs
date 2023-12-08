const cron = require('node-cron');
const trackerData = require('./trackerData.js');
const scrapeData = require("./scrapeData.js")
const currencyStringToNumberInGbp = require("./currencyConversions.js");
const {wait} = require("nightmare/lib/actions");

async function runApp() {
    for (const entry of trackerData) {
        const priceString = await scrapeData.getHTMLSelenium(entry.productPage, entry.identifier);
        const currentPrice = await currencyStringToNumberInGbp(priceString);
        console.log("--------------")
        console.log(entry.name)
        console.log(priceString)
        console.log(currentPrice)
    }
}

runApp()
