const express = require("express");
const router = express.Router();
const aboutcon = require("../data/about");

router.get("/", async (req, res) => {
    try {
      const about = await aboutcon.aboutInfo();
      res.json(about);
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).send();
    }
  });




module.exports = router;