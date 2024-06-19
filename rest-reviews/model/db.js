const pg = require('pg');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    override: true,
    path: path.join(__dirname, '../.env')
});


const pool = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

module.exports = pool;