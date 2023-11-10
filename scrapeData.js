const axios = require("axios");
const cheerio = require("cheerio");

async function getHTML(url) {
    const { data } = await axios.get(url).catch(() => {
        console.log("Couldn't get the page ☹️");
    });
    return data;
}

function scrapePrice(html, identifier){
    const $ = cheerio.load(html);
    const price = $(identifier)
        .first()
        .text()
        .trim();
    return price;
}

module.exports = {
    getHTML,
    scrapePrice
}
