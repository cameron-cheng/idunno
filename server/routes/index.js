const express = require ("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.psql("index.html")
}); 

module.exports = router;