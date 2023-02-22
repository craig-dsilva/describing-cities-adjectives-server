const express = require("express");
const pool = require("./pool");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.get("/adjective", (req, res) => {
  pool
    .query("SELECT * FROM adjectives")
    .then((data) =>
      res.json(
        data.rows[Math.floor(Math.random() * data.rows.length)].adjective
      )
    )
    .catch((err) => console.error(err));
});

app.listen(PORT);
