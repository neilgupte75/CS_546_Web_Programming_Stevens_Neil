const people = require("./people");
const weather = require("./weather");
const work = require("./work");

async function main(){
    try{
        const peopledata = await people.getPersonById(43)
        console.log (peopledata)
    }catch(e){
        console.log (e);
    }

////////////////////////////////////////////////////////////////////////////////////
    try{
        const peopledata = await people.lexIndex(2)
        console.log (peopledata)
    }catch(e){
        console.log (e);
    }
///////////////////////////////////////////////////////////////////////////////
    try{
        const peopledata = await people.firstNameMetrics()
        console.log(peopledata)
    }catch(e){
        console.log (e);
    }
/////////////////////////////////////////////////////////////////////////////////////
    try{
        const weatherdata = await weather.shouldTheyGoOutside("calli", "Ondrasek")
        console.log(weatherdata)
    }catch(e){
        console.log (e);
    }
//////////////////////////////////////////////////////////////////////////////////////////
    try{
        const workdata = await work.whereDoTheyWork("hank", "tarling")
        console.log(workdata)
    }catch(e){
        console.log (e);
    }
//////////////////////////////////////////////////////////////////////////////////////////
    try{
        const workdata = await work.findTheHacker("79.222.167.180");
        console.log(workdata)
    }catch(e){
        console.log (e);
    }
    try{
        const workdata = await people.findPerson("rob");
        console.log(workdata)
    }catch(e){
        console.log (e);
    }

}
//call main
main()