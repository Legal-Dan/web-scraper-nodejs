const cheerio = require("cheerio");
const Nightmare = require('nightmare');
const axios = require("axios");
const {Builder} = require('selenium-webdriver');

function getHTML(url, identifier)  {
    if (url.includes("amazon.co.uk")) {
        return getHTMLNightmare(url, identifier)
    }
    else {
        return getHTMLSelenium(url, identifier)
    }
}

async function getHTMLNightmare(url, identifier)  {
    const nightmare = Nightmare();
    try {
        return await nightmare
        .goto(url)
        .wait(1000)
        .evaluate(function () {
            return document.body.outerHTML;
        })
        .end()
        .then(function (result) {
            return scrapePrice(result, identifier);
        });
    }
    catch (err) {
        console.log("Error with Nightmare")
    }
}

async function getHTMLAxios(url, identifier){
    axios.defaults.maxRedirects = 10;
    axios.interceptors.response.use(
        response => response,
        error => {
            if (error.response && [301, 302].includes(error.response.status)) {
                const redirectUrl = error.response.headers.location;
                return axios.get(redirectUrl);
            }
            return Promise.reject(error);
        }
    );
    try {
    const { data } = await axios.get(url).catch(() => {
        console.log("Couldn't get the page ☹️");
    });
    return scrapePrice(data, identifier);
    }
    catch (err) {
        console.log("Error with Axios")
    }
}

async function getHTMLSelenium(url, identifier) {
    const chrome = require('selenium-webdriver/chrome');
    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build();

    try {
        await driver.get(url);
        const response = await driver.getPageSource();
        return findPrice(response, identifier)
    }
    catch (err) {
        console.log("Error with Selenium")
    }
}

function findPrice(html, identifier){
    if (html.includes("https://www.drivethrurpg.com/product")){
        return scrapeDTRPGPrice(html, identifier)
    }
    else if (html.includes("Nintendo Switch download software")){
        return scrapeNintendoPrice(html, identifier)
    }
    else if (html.includes("https://freeleaguepublishing.com")){
        return scrapeFreeLeaguePrice(html, identifier)
    }
    else{
        return scrapePrice(html, identifier)
    }
}

function scrapePrice(html, identifier){
    const $ = cheerio.load(html);
    try {
        const price = $(identifier)
            .first()
            .text()
            .trim();
        return (price.toString());
    }
    catch (err) {
        console.log("Error in scraping data")
    }
}

function scrapeDTRPGPrice(html, identifier){
    try {
        let correctFormat = html.split(identifier)[1]
        let findPrice = '$' + correctFormat.split('$')[1]
        return findPrice.split(" ")[0]
    } catch (err) {
        console.log("Error in scraping DTRPG data")
    }
}

function scrapeNintendoPrice(html, identifier){
    try {
        let correctFormat = html.split(identifier)[1]
        let findPrice = '£' + correctFormat.split(': ')[1]
        return findPrice.split(",")[0]
    } catch (err) {
        console.log("Error in scraping Nintendo data")
    }
}


function scrapeFreeLeaguePrice(html, identifier){
    try {
        let findPrice = html.split(identifier)[1]
        return '£' + findPrice.split("</h4>")[0]
    } catch (err) {
        console.log("Error in scraping Free League data")
    }
}

module.exports = {
    getHTML
}
