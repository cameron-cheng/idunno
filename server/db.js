const Pool = require("pg").Pool;

const pool = new Pool ({
  user: "cameron",
  password: "postgres",
  host: "localhost",
  port: 5000,
  database: idunno
});

module.exports = pool;