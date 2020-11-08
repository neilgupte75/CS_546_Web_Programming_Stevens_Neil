const express = require("express");
const router = express.Router();
const people = require("../data/people");

router.get("/", async (req, res) => {
    try {
    constpeople=await people.getPeople();
    res.json(constpeople);
    } catch (e) {
    res.status(404).json({ message:"not found!" });
    }
    });

    router.get("/:id", async (req, res) => {
        try {
            const id = parseInt(req.params.id);
        constperson = await people.getPersonById(id);
        res.json(constperson);
        } catch (e) {
        res.status(404).json({ message:"not found  id zzzzzzzzz!" });
        }
        });
module.exports = router;