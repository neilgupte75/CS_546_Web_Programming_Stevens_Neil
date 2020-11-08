const animals = require("./data/animals");

async function main() {
    try{
    const mortimer = await animals.create("Sasha", "Dog");
    console.log(mortimer);
    let id1=mortimer._id
    
    const mortimer1 = await animals.create("Lucy", "Dog");
    let id2=mortimer1._id

    const allMyAnimals = await animals.getAll();
    console.log(allMyAnimals);
    const mortimer2 = await animals.create("Duke", "walrus");
    console.log(mortimer2);
    
    //const blubBlub = await animals.get("5d8d93a44151b33b2caae69c");
    //console.log(blubBlub);

    const bubba = await animals.rename(id1,"Sashita");
    console.log(bubba);
        
    //const noMatch = await animals.get("BADID");
    //console.log(noMatch)

    const removeBlubBlub = await animals.remove(id2);
    //console.log(removeBlubBlub);
    
    

    const allMyAnimals2 = await animals.getAll();
    console.log(allMyAnimals2);
    }
    catch(e)
    {
        console.log(e);
        
    }
}

main();