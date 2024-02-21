const fs = require('node:fs');
const emailHandler = require("./emailHandler");
const trackerData = require("./trackerData");
let priceData = []

function writeToStorage(id, currentPrice) {
    if (currentPrice != null) {
        priceData.push({ID: id, Timestamp: formattedDate(), Price: currentPrice, lowPrice: findLowPrice(id, currentPrice)});
    }else {
        emailHandler.sendErrorEmail(id)
    }
}

function formattedDate() {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

function exportPriceData() {
    console.log("Exporting...")
    fs.writeFile('/Users/dct5743/priceData.txt', JSON.stringify(priceData), err => {
        if (err) {
            console.error(err);
        }
    });
    emailHandler.exportData(priceData)
}

function importPriceData() {
    let rawData = require('/Users/dct5743/priceData.txt');
    priceData = JSON.parse(rawData);
}

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

function findLowPrice(id, currentPrice){
    let currentLowPrice = findLowPriceByID(id)

    if (currentLowPrice == null){
        return currentPrice
    } else if (currentLowPrice > currentPrice){
        console.log(`${id} LOW`)
        return currentPrice
    } else if (currentLowPrice == currentPrice && currentPrice != findYesterdaysPriceByID(id)){
        console.log(`${id} LOW`)
        return currentPrice
    } else {
        return currentLowPrice
    }
}

function findLowPriceByID(id){
    for (let i = 0; i < trackerData.length; i++) {
        let index = priceData.length-i-1
        if (priceData[index]['ID'] == id && priceData[index]['lowPrice'] != null) {
            return priceData[index]['lowPrice']
        }
    }
}

function findYesterdaysPriceByID(id){
    for (let i = 0; i < trackerData.length; i++) {
        let index = priceData.length-i-1
        if (priceData[index]['ID'] == id && priceData[index]['lowPrice'] != null) {
            return priceData[index]['Price']
        }
    }
}

module.exports = {
    writeToStorage: writeToStorage,
    exportPriceData: exportPriceData,
    importPriceData: importPriceData
}
