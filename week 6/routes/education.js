const express = require('express');
const router = express.Router();
const educon = require("../data/education");


router.get("/", async (req , res) => {
    try{
        const education = await educon.eduInfo();
        res.json(education);
    }
    catch(e){
        res.status(500).send();
    }
})

module.exports = router;