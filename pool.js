const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.eventNames.DB_PORT,
});

module.exports = pool;
