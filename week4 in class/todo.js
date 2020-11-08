let ObjectId = require('mongodb').ObjectID
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems

let createTask=async(title, description)=>{
    if(!title){
        throw "title is empty"
    }

    if(!description){
        throw "description is empty"
    }

    const taskCollection = await todoItems();
    let objToInsert = {
        title : title,
        description : description,
        completed : false,
        completedAt : null,
    }
    const insertInfo = await taskCollection.insertOne(objToInsert)
            if(insertInfo.insertedCount === 0) {
                throw "could not insert item"
            }
        
        const newId = insertInfo.insertedId;
        const task = await getTask(newId)
        return task;

}
/////////////////////////////////////////////////////////////////////////////
let getTask=async(id)=>{
    if(!id){ 
    throw "enter id"
    }


    const taskCollection = await todoItems();
    const taskGo = await taskCollection.findOne({ _id:ObjectId(id)})
    if(taskGo == null){ 
    throw "Task not found"
    }

    return taskGo
}
//////////////////////////////////////////////////////////////////////////////////
let completeTask=async(taskId)=>{
    if(!taskId){ 
    throw "enter id"
    }
    const taskCollection = await todoItems()
    const updateItem = {
            $set: {
                completed: true,
                completedAt: new Date().toString()
            }
            
    }
    const updatedItem = await taskCollection.updateOne({_id:taskId},
    updateItem)
    if(updatedItem.modifiedCount == 0 ){
        throw "Could not update the item.Try again"
    }
    return await getTask(taskId);
}
////////////////////////////////////////////////////////////////////////////////
let removeTask=async(id)=>{
    if(!id){
        throw "id not entered"
    }
    const taskCollection = await todoItems();
    const deletionInfo = await taskCollection.removeOne({_id:Object(id)})

    if(deletionInfo.deletedCount === 0){
        throw "The task could not be deleted"
    }

}
/////////////////////////////////////////////////////////////////////////////////
let getAllTasks=async()=>{
    const taskCollection = await todoItems() //
    const allTasks = await taskCollection.find({}).toArray();
    return allTasks;
}

module.exports={createTask,getTask,completeTask,removeTask,getAllTasks};