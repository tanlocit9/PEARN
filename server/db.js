const Pool = require("pg/lib").Pool;

const pool = new Pool({
    user: "postgres",
    password: "null2107",
    host: "localhost",
    port: "5432",
    database: "login"
})

module.exports = pool;