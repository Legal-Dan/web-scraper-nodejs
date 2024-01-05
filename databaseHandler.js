const { createPool } = require('mysql')
const pool = createPool({
    host: 'sql8.freesqldatabase.com',
    user: 'sql8674852',
    password: process.env.SQL_PASSWORD,
    database: 'sql8674852',
    connectionLimit: 10
})

function writeToDb(id, currentPrice)  {
    pool.query(`INSERT INTO PriceData (ID, Timestamp, Price) VALUES (${id}, '${formattedDate()}', ${currentPrice});`)
}

function readDb()  {
    pool.query(`SELECT * FROM PriceData`, (err, result, fields) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    })
}

function formattedDate() {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

module.exports = {
    writeToDb
}
