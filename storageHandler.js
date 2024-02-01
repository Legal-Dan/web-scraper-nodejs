const fs = require('node:fs');
const emailHandler = require("./emailHandler");
let priceData = []

function writeToStorage(id, currentPrice)  {
    priceData.push({ID: id, Timestamp: formattedDate(), Price: currentPrice});
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

module.exports = {
    writeToStorage: writeToStorage,
    exportPriceData: exportPriceData,
    importPriceData: importPriceData
}
