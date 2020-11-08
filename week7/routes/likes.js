const express = require('express');
const router = express.Router();
const likesData = require('../data/likes');
const animalsData=require("../data/animals")
const postData=require("../data/posts")

router.post('/:id', async (req, res) => {
  try {
    currentUser=await animalsData.get(req.params.id);
  } catch (e) {
    res.status(404).json({error: 'Animals not found'});
    return;
  }
  try {
    await postData.getPostById(req.query.postId);
  } catch (e) {
    res.status(404).json({error: 'Post not found'});
    return;
  } 
  try {
      const post = await likesData.addLikes(req.params.id,req.query.postId);
      res.json(post);
      res.status(200);
    } catch (e) {
      res.status(500).json({error: e});
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      currentUser=await animalsData.get(req.params.id);
    } catch (e) {
      res.status(404).json({error: 'Animals not found'});
      return;
    }
    try {
      await postData.getPostById(req.query.postId);
    } catch (e) {
      res.status(404).json({error: 'Post not found'});
      return;
    } 
    
    try {
      const post = await likesData.removeLikes(req.params.id,req.query.postId);
      res.json(post);
      res.status(200);
    } catch (e) {
      res.status(500).json({error: e});
    }
  });


  module.exports=router;
  