const axios = require("axios");

async function convertToGBP(amount, currencyFrom){
    const rate = await getCurrentRates(currencyFrom)
    console.log(`If the cost is ${currencyFrom} ${amount}, and the exchange rate is ${currencyFrom}1:£${rate}, then the cost is £${(amount * rate).toFixed(2)}`)
    return Number((amount * rate).toFixed(2))
}

async function getCurrentRates(currencyFrom){
    const url = "https://api.exchangerate-api.com/v4/latest/" + currencyFrom;
    const { data } = await axios.get(url).catch(() => {
        console.log("Couldn't get the page ☹️");
    });
    return data.rates.GBP
}

async function currencyStringToNumberInGbp(priceString) {
    try {
        const priceNumber = Number(priceString.replace(/[^0-9.-]+/g, ''))
        if (priceString[0] == '£'){
            return priceNumber;
        } else if (priceString[0] == '€'){
            const convertedPrice = await convertToGBP(priceNumber, 'EUR')
            return convertedPrice
        } else if (priceString[0] == '$'){
            const convertedPrice = await convertToGBP(priceNumber, 'USD')
            return convertedPrice
        } else {
            return "Foreign!"
        }
    } catch (err) {
        console.log("Price number not valid")
    }
}

module.exports = {currencyStringToNumberInGbp};
