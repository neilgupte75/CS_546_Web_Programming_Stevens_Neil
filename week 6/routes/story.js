const express = require('express');
const router = express.Router();
const storycon = require("../data/story");


router.get("/", async (req , res) => {
    try{
        const story = await storycon.storyInfo();
        res.json(story);
    }
    catch(e){
        res.status(500).send();
    }
})

module.exports = router;