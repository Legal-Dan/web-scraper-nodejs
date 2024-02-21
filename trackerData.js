const amazonList = require("./data/amazon.js");
const freeLeagueList = require("./data/freeLeague.js");
const dtrpgList = require("./data/dtrpg.js");
const nintendoList = require("./data/nintendo.js");
const otherList = require("./data/other.js");
const certificateList = require("./data/certificate.js");

function trackerData() {
    //latest index 30
    const emptyList = []

    return emptyList.concat(
        amazonList,
        freeLeagueList,
        dtrpgList,
        nintendoList,
        otherList,
        certificateList
    );
}

module.exports = trackerData();