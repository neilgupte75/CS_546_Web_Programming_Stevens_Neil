const express = require('express');
const router = express.Router();
const peopleData = require('../data/people');


router.get('/', async (req, res) => {
  //const users = await peopleData.getAllUsers();
  try{
  res.render('people/main_page');
  res.status(200);
    }catch (e) {
    res.status(500).json({error: e});
  }
});

router.post('/search',async (req, res) => {
    //const users = await peopleData.getAllUsers();
    try{
    if(!req.body.personName){
        res.render('people/error');
        res.status(400);
        return    
    }
    const person= await(req.body.personName)
    const personlist=await peopleData.findPerson(person)
    if(personlist.length===0){
        let error="We're sorry, but no results were found for"
        res.render('people/search',{person:person,error:error});
        res.status(200);
        return
    }
    res.render('people/search',{person:person,similar:personlist});
    res.status(200);
    }catch (e) {
    res.status(500).json({error: e});
  }
  });

router.get('/details/:id', async (req, res) => {
    try{
    const person= await peopleData.getPersonById(req.params.id)
    
    res.render('people/details',{persons:person});
    res.status(200);
    }catch (e) {
    res.status(500).json({error: e});
  }
  });


module.exports = router;