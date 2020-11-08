const express = require("express");
const router = express.Router();
const animalsData =require("../data/animals")
const postData=require("../data/posts")


router.get("/", async (req, res) => {
    try {
      const animList = await animalsData.getAll();
      res.json(animList);
      res.status(200);
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).json({error: e});
    }
  });

router.post('/', async (req, res) => {
    let animInfo = req.body;
    try {
    if (!animInfo) {
      res.status(400).json({error: 'You must provide data to create an animal'});
      return;
    }
    if(Object.keys(animInfo).length!==2){
      res.status(400).json({error: 'You must provide proper data to create an animal'});
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
      const newanim = await animalsData.create(animInfo.name, animInfo.animalType);
      res.json(newanim);
      res.status(200);
    } catch (e) {
      res.status(500).json({error: e});
    }
  });  
  
router.get('/:id', async (req, res) => {
      try {  
      let anim = await animalsData.get(req.params.id);
      res.json(anim);
      res.status(200);
      
    } catch (e) {
      res.status(404).json({error: 'Animal not found'});
    }
  });

  router.put('/:id', async (req, res) => {
    let userInfo = req.body;
  
    if (!userInfo) {
      res.status(400).json({error: 'You must provide data to update an animal'});
      return;
    }
    if(Object.keys(userInfo).length>2){
      res.status(400).json({error: 'You must provide proper json to update an animal'});
      return;
    }
    if(Object.keys(userInfo).length===1){
      if(!userInfo.newName && !userInfo.newType){
      res.status(400).json({error: 'You must provide either newName or newType as keys'});
      return;
    }
    }
    if(Object.keys(userInfo).length===2){
      if(!userInfo.newName || !userInfo.newType){
      res.status(400).json({error: 'You must provide either newName or newType as keys!'});
      return;
    }
    }
   
  

    

  
   // if (!userInfo.id) {
    //  res.status(400).json({error: 'You must provide a id'});
      //return;
   // }
    
    //if (!userInfo.newName) {
      //  res.status(400).json({error: 'You must provide a new name'});
        //return;
      //}
    try {
      await animalsData.get(req.params.id);
    } catch (e) {
      res.status(404).json({error: 'User not found'});
      return;
    }
    
  try {
    const animupdate = await animalsData.rename(req.params.id,userInfo);
    res.json(animupdate);

  } catch (e) {
    res.status(500).json({error: e});
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
      let deletedAnim=await animalsData.remove(req.params.id);
      res.json(deletedAnim)
      //let count=deletedAnim.data.posts.length
      //for(let i=0;i<count;i++){
        //await postData.removePost(deletedAnim.data.posts[i]._id);
     // }
      
      
      res.status(200);
      
      
    } catch (e) {
      res.status(500).json({error: e});
    }
  });

module.exports = router;