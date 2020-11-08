const express = require("express");
const router = express.Router();
const animalsData =require("../data/animals") 


router.get("/", async (req, res) => {
    try {
      const animList = await animalsData.getAll();
      res.json(animList);
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).send();
    }
  });

router.post('/', async (req, res) => {
    let animInfo = req.body;
  
    if (!animInfo) {
      res.status(400).json({error: 'You must provide data to create a animals'});
      return;
    }
  
    if (!animInfo.name) {
      res.status(400).json({error: 'You must provide a name'});
      return;
    }
  
    if (!animInfo.animalType) {
      res.status(400).json({error: 'You must provide the animal type'});
      return;
    }
  
    try {
      const newanim = await animData.create(animInfo.name, animInfo.animalType);
      res.json(newanim);
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
  });  
  
router.get('/:id', async (req, res) => {
        let animInfo=req.body;
        if (!animInfo.id) {
            res.status(400).json({error: 'You must provide the id'});
            return;
          }
          try {  
      let anim = await animalsData.get(req.params.id);
      res.json(anim);
      res.sendStatus(200)
      
    } catch (e) {
      res.status(404).json({error: 'Animal not found'});
    }
  });

  router.put('/:id', async (req, res) => {
    let userInfo = req.body;
  
    if (!userInfo) {
      res.status(400).json({error: 'You must provide data to update a animal'});
      return;
    }
  
    if (!userInfo.id) {
      res.status(400).json({error: 'You must provide a id'});
      return;
    }
    
    
    if (!userInfo.name) {
        res.status(400).json({error: 'You must provide a new name'});
        return;
      }
    try {
      await animalsData.get(req.params.id);
    } catch (e) {
      res.status(404).json({error: 'User not found'});
      return;
    }
    
  try {
    const animupdate = await animalsData.rename(req.params.id, userInfo.name);
    res.json(animupdate);

  } catch (e) {
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
    try {
      await animalsData.get(req.params.id);
    } catch (e) {
      res.status(404).json({error: 'Animals not found'});
      return;
    }
  
    try {
      await animalsData.remove(req.params.id);
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
  });

module.exports = router;