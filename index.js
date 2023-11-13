const cron = require('node-cron');
const trackerData = require('./trackerData.js');
const scrapeData = require("./scrapeData.js")
const currencyStringToNumberInGbp = require("./currencyConversions.js");
const {wait} = require("nightmare/lib/actions");

async function runApp() {
    debugger;
    for (const entry of trackerData) {
        debugger;
        const priceString = await scrapeData.getHTML(entry.productPage, entry.identifier);
        const currentPrice = await currencyStringToNumberInGbp(priceString);
        console.log("--------------")
        console.log(entry.name)
        console.log(priceString)
        console.log(currentPrice)
    }
}

runApp()
