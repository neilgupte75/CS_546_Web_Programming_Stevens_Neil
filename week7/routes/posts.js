const express = require('express');
const router = express.Router();
const postData = require('../data/posts');
const animalsData =require("../data/animals")



router.post("/", async (req, res) => {
    const blogPostData = req.body;
    if (!blogPostData) {
      res.status(400).json({error: 'You must provide data to add an post'});
      return;
    }
    if (Object.keys(blogPostData).length!==3){
      res.status(400).json({error: 'You must provide proper data to add an post'});
      return;
    }
    if (!blogPostData.title||!blogPostData.author||!blogPostData.content){
      res.status(400).json({error: 'You must provide proper data to add an post!'});
      return;
    }
    try{
      const newPost = await postData.addPost(blogPostData.title,blogPostData.author,blogPostData.content);
      res.json(newPost);
      res.status(200);
    }
    catch(e){
      res.status(500).json({error: e});
    }
  });

  router.get('/', async (req, res) => {
    try {
      const postList = await postData.getAllPosts();
      res.json(postList);
    } catch (e) {
      res.status(500).json({error: e});
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const post = await postData.getPostById(req.params.id);
      res.json(post);
      res.status(200);
    } catch (e) {
      res.status(404).json({error: 'Post not found'});
    }
  });
  
  router.put('/:id', async (req, res) => {
    const updatedData = req.body;
    if (!updatedData) {
      res.status(400).json({error: 'You must provide data to update a post'});
      return;
    }
    if(Object.keys(updatedData).length>2){
      res.status(400).json({error: 'You must provide proper json to update a post'});
      return;
    }
    if(Object.keys(updatedData).length===1){
      if(!updatedData.newContent && !updatedData.newTitle){
      res.status(400).json({error: 'You must provide either newTitle or newContent as keys'});
      return;
    }
    }
    if(Object.keys(updatedData).length===2){
      if(!updatedData.newContent || !updatedData.newTitle){
      res.status(400).json({error: 'You must provide either newTitle or newContent as keys!'});
      return;
    }
    }
   
    
    try {
      await postData.getPostById(req.params.id);
    } catch (e) {
      res.status(404).json({error: 'Post not found'});
      return;
    }
  
    try {
      const updatedPost = await postData.updatePost(req.params.id, updatedData);
      res.json(updatedPost);
    } catch (e) {
      res.status(500).json({error: e});
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await postData.getPostById(req.params.id);
      
    } catch (e) {
      res.status(404).json({error: 'Post not found'});
      return;
    }
    try {
      let deletedPost=await postData.removePost(req.params.id);
      res.json(deletedPost)
      res.status(200);
    } catch (e) {
      res.status(500).json({error: e});
    }
  });


module.exports = router;