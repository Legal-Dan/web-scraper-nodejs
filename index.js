const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');

const trackerData = [
    // {
    //     name: "Guards Guards!",
    //     productPage: "https://www.amazon.co.uk/Guards-Discworld-City-Watch-Collection/dp/1473200180/",
    //     identifier: ".a-color-price"
    // },
    // {
    //     name: "Cyberpunk Red RPG Jumpstart Kit",
    //     productPage: "https://magicmadhouse.co.uk/r-talsorian-games-cyberpunk-red-jumpstart-kit",
    //     identifier: ".price--withTax"
    // },
    // {
    //     name: "KULT: The Forbidden",
    //     productPage: "https://webshop.helmgast.se/kult/the-forbidden-scenario-collection.html",
    //     identifier: ".tws-api--price-current"
    // },
    {
        name: "Tales of Aquatic Terror",
        productPage: "https://www.drivethrurpg.com/product/338827/Tales-of-Aquatic-Terror",
        identifier: ".product-tile-text-highlight"
    }
]

async function getHTML(url) {
    const { data } = await axios.get(url).catch(() => {
        console.log("Couldn't get the page ☹️");
    });
    console.log(data)
    return data;
}

async function currencyStringToNumberInGbp(priceString) {
    const priceNumber = Number(priceString.replace(/[^0-9.-]+/g, ''));
    if (priceString[0] == '£'){
        return priceNumber;
    } else if (priceString[0] == '€'){
        const convertedPrice = await convertToGBP(priceNumber, 'EUR')
        return convertedPrice
    } else if (priceString[0] == '$'){
        return convertToGBP(priceNumber, 'USD')
    } else {
        return "Foreign!"
    }
}

async function convertToGBP(amount, currencyFrom){
    const rate = await getCurrentRates(currencyFrom)
    console.log(`If the cost is €${amount}, and the exchange rate is €1:£${rate}, then the cost is £${(amount * rate).toFixed(2)}`)
    return Number((amount * rate).toFixed(2))
}

async function getCurrentRates(currencyFrom){
    const url = "https://api.exchangerate-api.com/v4/latest/" + currencyFrom;
    const { data } = await axios.get(url).catch(() => {
        console.log("Couldn't get the page ☹️");
    });
    return data.rates.GBP
}

function scrapePrice(html, identifier){
    const $ = cheerio.load(html);
    const price = $(identifier)
        .first()
        .text()
        .trim();
    return price;
}

async function runApp() {
    for (const entry of trackerData) {
        const html = await getHTML(entry.productPage);
        const priceString = scrapePrice(html, entry.identifier)
        const currentPrice = await currencyStringToNumberInGbp(priceString);
        console.log("--------------")
        console.log(entry.name)
        console.log(priceString)
        console.log(currentPrice)
    }
}

runApp()


