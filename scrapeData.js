const cheerio = require("cheerio");
const Nightmare = require('nightmare');
const nightmare = Nightmare();

function scrapePrice(html, identifier){
    const $ = cheerio.load(html);
    const price = $(identifier)
        .first()
        .text()
        .trim();
    return(price.toString());
}

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

module.exports = {
    getHTML
}
