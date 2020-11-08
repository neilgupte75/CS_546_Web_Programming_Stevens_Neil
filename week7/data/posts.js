const mongoCollections = require('./mongoCollections');
const ObjectId = require('mongodb').ObjectID
const posts = mongoCollections.posts;
const animals = require('./animals');
const anims=mongoCollections.animals;

let exportedMethods = {
    async getAllPosts() {
      const postCollection = await posts();
      return await postCollection.find({}).toArray();
    },
    async getPostById(id) {
        if(!id) throw new Error("enter id");
      const postCollection = await posts();
      const post = await postCollection.findOne({_id: ObjectId(id)});
  
      if (!post) throw 'Post not found';
      return post;
    },
    async addPost(title,author,content) {
      const postCollection = await posts();
      const userThatPosted = await animals.get(author);
      if(!title) throw new Error("enter title");
      if(!author) throw new Error("enter author");
      if(!content)throw new Error("enter some content");
      if(title===undefined||author===undefined||content===undefined) throw new Error("Fields should be defined");
      if(typeof(title)!=="string") throw new Error("title should be string");
      if(typeof(content)!=="string") throw new Error("content should be string");
      if(typeof(author)==="number")  throw new Error("author should be string or object id"); 
      
      const newPost = {
        title: title,
        author:{ 
          _id: author,
          name: userThatPosted.name
        },
        content: content
      };
  
      newInsertInformation = await postCollection.insertOne(newPost);
      if(newInsertInformation.insertedCount === 0) throw 'Insert failed!';
      const posterId= await newInsertInformation.insertedId;
      await animals.addPostToUser(userThatPosted._id, posterId, title);
      return await this.getPostById(posterId)
    },
    async removePost(id) {
        if(!id){
            throw "enter id to find"
        }
        if(typeof(id)==="number") throw new Error("The id should be in string format");
    
      const postCollection = await posts();
      const animCollection= await anims();
      const delPost= await this.getPostById(id)
      const deletionInfo = await postCollection.removeOne({_id:ObjectId(id)});
      if (deletionInfo.deletedCount === 0) throw `Could not delete post with id of ${id}`;
      await animCollection.updateOne({_id: ObjectId(delPost.author._id),"posts._id":delPost._id}, {$pull:{posts:{_id:delPost._id,title:delPost.title}}});
      let final={}
      final["deleted"]="true";
      final["data"]=delPost;
      return final
    },
    async updatePost(id, updatedPost) {
      const postCollection = await posts();
      const animCollection= await anims();
      const prepost=await this.getPostById(id)
  
      const updatedPostData = {};
  
      if (updatedPost.newTitle) {
        updatedPostData.title = updatedPost.newTitle;
      }
  
      if (updatedPost.newContent) {
        updatedPostData.content = updatedPost.newContent;
      }
  
      await postCollection.updateOne({_id: ObjectId(id)}, {$set: updatedPostData});
      let uppost=await this.getPostById(id)
      //console.log(uppost.author._id)
      updatedAnimData={
      }
      await animCollection.updateOne({_id: ObjectId(uppost.author._id),"posts._id":prepost._id}, {$set:{"posts.$.title":uppost.title}});

  
      return await this.getPostById(id);
    }
}
  module.exports = exportedMethods;