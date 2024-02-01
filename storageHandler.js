const fs = require('node:fs');
const emailHandler = require("./emailHandler");
const trackerData = require("./trackerData");
let priceData = []

function writeToStorage(id, currentPrice) {
    if (currentPrice != null) {
        checkForLowPrice(id, currentPrice)
        priceData.push({ID: id, Timestamp: formattedDate(), Price: currentPrice});
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

function checkForLowPrice(id, currentPrice){
    for (let i = 0; i < priceData.length; i++) {
        if (priceData[i]['ID'] == id && priceData[i]['Price'] < currentPrice) {
            return false
        }
    }
    for (let i = 0; i < trackerData.length; i++) {
        let index = priceData.length-i-1
        console.log(index)
        if (priceData[index]['ID'] == id && priceData[index]['Price'] == currentPrice) {
            return false
        }
    }
    console.log(`${id} LOW`)
}

module.exports = {
    writeToStorage: writeToStorage,
    exportPriceData: exportPriceData,
    importPriceData: importPriceData
}
