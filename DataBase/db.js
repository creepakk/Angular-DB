const { Pool } = require('pg')
const pool = new Pool({
    user: "admin",
    password: "admin",
    host: "127.0.0.1",
    port: 5432,
    database: "postgres_db"
})


module.exports = pool