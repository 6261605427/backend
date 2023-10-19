const mysql = require('mysql')

/// database connectivity
const connectDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "infoware"
})

connectDb.connect((err) => {
    if (err) {
        console.log(err.sqlMessage)
    }
    console.log("Database connected")
})

module.exports = connectDb