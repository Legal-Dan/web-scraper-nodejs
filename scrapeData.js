const cheerio = require("cheerio");
const Nightmare = require('nightmare');
const axios = require("axios");
const nightmare = Nightmare();
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
    return await nightmare
        .goto(url)
        .wait(5000)
        .evaluate(function () {
            return document.body.outerHTML;
        })
        .end()
        .then(function (result) {
            return scrapePrice(result, identifier);
        });
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
    const { data } = await axios.get(url).catch(() => {
        console.log("Couldn't get the page ☹️");
    });
    return scrapePrice(data, identifier);
}

async function getHTMLSelenium(url, identifier) {
    const chrome = require('selenium-webdriver/chrome');
    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build();

    await driver.get(url);
    const response = await driver.getPageSource();
    return findPrice(response, identifier)
}

function findPrice(html, identifier){
    if (html.includes("_ngcontent-serverapp-c181")){
        return scrapeDTRPGPrice(html, identifier)
    }
    else{
        return scrapePrice(html, identifier)
    }
}

function scrapePrice(html, identifier){
    const $ = cheerio.load(html);
    const price = $(identifier)
        .first()
        .text()
        .trim();
    return(price.toString());
}

function scrapeDTRPGPrice(html, identifier){
    try {
        return html.split(identifier)[1].split(" ")[0].toString()
    } catch(err) {
        console.log("Error in scraping data")
    }
}

module.exports = {
    getHTML
}
