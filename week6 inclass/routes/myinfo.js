const express = require("express");
const router = express.Router();
const myInfo = { name: 'Neil Gupte', dateOfBirth: '06/96', hometown: 'Pune,India'}

router.get("/", async (req, res) => {

    res.json(myInfo);
    });
module.exports = router;