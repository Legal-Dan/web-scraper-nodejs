const cheerio = require("cheerio");
const Nightmare = require('nightmare');
const axios = require("axios");
const nightmare = Nightmare();
const {By, Builder} = require('selenium-webdriver');

async function getHTML(url, identifier)  {
    let price = await nightmare
        .goto(url)
        .wait(5000)
        .evaluate(function () {
            return document.body.outerHTML;
        })
        .end()
        .then(function (result) {
            return scrapePrice(result, identifier);
        })

    return price;
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
    return html.split(identifier)[2].split(" ")[0].toString();
}

module.exports = {
    getHTML,
    getHTMLAxios,
    getHTMLSelenium
}
