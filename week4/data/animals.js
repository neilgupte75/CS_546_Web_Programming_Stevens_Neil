const ObjectId = require('mongodb').ObjectID
const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals
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
    const deletionInfo = await animCollection.removeOne({_id: id})

    if(deletionInfo.deletedCount === 0){
        throw "The task could not be deleted"
    }
    return task;
}
//////////////////////////////////////////////////////////////////////////////////////
let rename=async(id,newName)=>{
    
        if (!id) throw "You must provide an id";
        if (!newName) throw "You must provide an New Name";
        if(typeof(newName)!=="string") throw new Error("The  new name should be in string format");
        if(typeof(id)==="number") throw new Error("The id should be in string format");

    
        const animCollection = await animals();
        let updatedPost = {
            $set: {
                name:newName
            }
          }
        
    
        const updatedInfo = await animCollection.replaceOne({ _id: id },updatedPost);
    
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

module.exports={create,get,getAll,remove,rename};