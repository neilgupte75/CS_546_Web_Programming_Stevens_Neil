const todoItems = require("./todo");

async function main() {
    try{
    const createTask1 = await todoItems.createTask("Ponder Dinosaurs",
    "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log("\n\n//////////////////////////////////////////////////////////////////////////\nTask 1 created successfully ");
    console.log(createTask1);
    //const getTask1= await todoItems.getTask(createTask1._id);
    //console.log(getTask1);
    
    /////////////////////////////////////////////////////////////////////////////////////
    const createTask2 = await todoItems.createTask("Play Pokemon with Twitch TV",
    "Should we revive Helix?");
    console.log("\n\n/////////////////////////////////////////////////////////////////////////\nTask 2 created successfully ");

    ////////////////////////////////////////////////////////////////////////////////
    let allTask= await todoItems.getAllTasks();
    console.log("\n\n//////////////////////////////////////////////////////////////////////////\nDISPLAYING ALL TASKS ");
    console.log(allTask);
    
    console.log("\n\n///////////////////////////////////////////////////////////////////////////n DONE DISPLAYING ALL TASKS ")
    ////////////////////////////////////////////////////////////////////
    const removeTasks = await todoItems.removeTask(createTask1._id)
    
    console.log("\n\n///////////////////////////////////////////////////////////////////////////\n TASK 1 REMOVED")
    //////////////////////////////////////////////////////////////////////
    let allTask1= await todoItems.getAllTasks();
    
    console.log("\n\n/////////////////////////////////////////////////////////////////////////\nDISPLAYING ALL REMAINING TASKS ")
    console.log(allTask1);
    ////////////////////////////////////////////////////////////////
    for(var i = 0; i < allTask1.length; i++){
            if(allTask1[i].completedAt == null){
            const compTask = await todoItems.completeTask(allTask1[i]._id)
            console.log("\n\n/////////////////////////////////////////////////////////////////////////\nDISPLAYING ALL COMPLETED TASKS ")
            console.log(compTask)
            }
            else{
                console.log(allTask1[i])
            }
        }
    }
    catch(e){
        console.log(e)
    }
}

main();
