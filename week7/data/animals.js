const ObjectId = require('mongodb').ObjectID
const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals
const posts=mongoCollections.posts
///////////////////////////////////////////////////////////////////
let create=async(name, animalType)=>{
    if(!name) throw new Error("Name cannot be empty");

    if(!animalType) throw new Error("Animal type cannot be empty");
    if(typeof(name)!=="string") throw new Error("The name should be in string format");
    if(typeof(name)!=="string") throw new Error("The animal type should be in string format");


    const animCollection = await animals();
    let objToInsert = {
        name : name,
        animalType : animalType,
        likes: [],
        posts: [] 
        }
    const insertInfo = await animCollection.insertOne(objToInsert)
            if(insertInfo.insertedCount === 0) {
                throw "could not insert animal"
            }
        
        const newId = insertInfo.insertedId;
        const task = await get(newId)
        return task;
}
let get=async(id)=>{
    if(!id) throw new Error("enter id");
    //if(typeof(id)!=="string") throw new Error("Id should be of type string");

    const animCollection = await animals();
    const animGo = await animCollection.findOne({ _id: new ObjectId(id) });
    if(animGo === null) throw new Error("no such id found");
    return animGo
}
//////////////////////////////////////////////////////////////////////////////////////////
let remove=async(id)=>{
    if(!id){
        throw "enter id to find"
    }
    if(typeof(id)==="number") throw new Error("The id should be in string format");

    const animCollection = await animals();
    let task=await get(id)
    //console.log(task.posts.length)
    const deletionInfo = await animCollection.removeOne({_id: ObjectId(id)})

    if(deletionInfo.deletedCount === 0){
        throw "The task could not be deleted"
    }
    const postCollection = await posts();
    for(let i=0;i<task.posts.length;i++)
    {
        var postid=task.posts[i]._id
        await postCollection.removeOne({_id:ObjectId(postid)});
        //if (deletionInfo.deletedCount === 0) throw `Could not delete post with id of ${postid}`;
    }


    let final={};
    final["deleted"]=true;
    final["data"]=task;
    
    return final;
}
//////////////////////////////////////////////////////////////////////////////////////
let rename=async(id,newInfo)=>{
    
        if (!id) throw "You must provide an id";
        if (!newInfo) throw "You must provide an New Info";
        //if(typeof(newInfo.newName)!=="string") throw new Error("The new name should be in string format");
        //if(typeof(newInfo.newType)!=="string") throw new Error("The new name should be in string format");
        if(typeof(id)==="number") throw new Error("The id should be in string format");

    
        const animCollection = await animals();
        let userUpdateInfo = {};
          if (newInfo.newName) {
            userUpdateInfo.name = newInfo.newName;
            if(typeof(newInfo.newName)!=="string") throw new Error("The new name should be in string format");
          }
      
          if (newInfo.newType) {
            userUpdateInfo.animalType = newInfo.newType;
            
            if(typeof(newInfo.newType)!=="string") throw new Error("The new name should be in string format");
          }
        
          let updateCommand = {
            $set: userUpdateInfo
          };
        
    
        const updatedInfo = await animCollection.updateOne({ _id: ObjectId(id) },updateCommand);
    
        if (updatedInfo.modifiedCount === 0) {
          throw "could not update post successfully";
        }
    
        return await get(id);
}

/////////////////////////////////////////////////////////////////////////////////////////////
let getAll=async()=>{
    const animCollection = await animals() 
    const allAnim = await animCollection.find({}).toArray();
    return allAnim;
}
let addPostToUser=async(userId, postId, postTitle)=>{
    if (!userId) throw "You must provide an id";
        if (!postId) throw "You must provide an Post Id";
        if (!postTitle) throw "You must provide an title";
        if(typeof(postTitle)!=="string") throw new Error("The new name should be in string format");
    let currentUser = await get(userId);

    const userCollection = await animals();
    const updateInfo = await userCollection.updateOne(
      {_id: currentUser._id},
      {$addToSet: {posts: {_id: postId, title: postTitle}}}
    );

    if (updateInfo.modifiedCount===0) throw 'Update failed';

    return await get(userId);
}
let addLikeToUser=async(userId, postId)=>{
    if (!userId) throw "You must provide an id";
        if (!postId) throw "You must provide an Post Id";
    let currentUser = await get(userId);
    //console.log(currentUser);
    
  let count=currentUser.likes.length
  for(let i=0;i<count;i++){
    if(currentUser.likes[i]._id===postId){
      return 
    }
  }

    const userCollection = await animals();
    const updateInfo = await userCollection.updateOne(
      {_id: currentUser._id},
      {$addToSet: {likes: {_id: postId}}}
    );

    if (updateInfo.modifiedCount===0) throw 'Update failed';

    return; //await get(userId);
}
let removeLikeFromUser=async(userId, postId)=>{
  if (!userId) throw "You must provide an id";
      if (!postId) throw "You must provide an Post Id";
  let currentUser = await get(userId);
  //console.log(currentUser);
  const userCollection = await animals();
  const updateInfo = await userCollection.updateOne(
    {_id: currentUser._id},
    {$pull: {likes: {_id: postId}}}
  );

  if (updateInfo.modifiedCount===0) throw 'Update failed';

  return;
}




module.exports={create,get,getAll,remove,rename,addPostToUser,addLikeToUser,removeLikeFromUser};