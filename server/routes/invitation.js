const express = require ("express");
const router = express.Router();

router.get("/invitation", (req, res, next) => {
  res.send("Invitation Route")
}); 

module.exports = router;