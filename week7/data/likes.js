const ObjectId = require('mongodb').ObjectID;
const posts=require("./posts")
const animals=require("./animals")

let addLikes=async(animId,postId)=>{
    const postsent = await posts.getPostById(postId);
    const userThatPosted = await animals.get(animId);
    let final=await animals.addLikeToUser(animId,postId);
    return final
}
let removeLikes=async(animId,postId)=>{
    const postsent = await posts.getPostById(postId);
    const userThatPosted = await animals.get(animId);
    let final=await animals.removeLikeFromUser(animId,postId);
    return final
}
module.exports={addLikes,removeLikes};