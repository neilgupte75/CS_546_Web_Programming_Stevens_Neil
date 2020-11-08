const axios = require('axios')
let capitalize=(string)=>{
    if(string===undefined){
        throw "UNDEFINED INPUT";
    }
    if(typeof(string)!=='string'){
        throw `The input ${string} is not of string type`;
    }
    let s=string.toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1);
}


async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data;
}
async function getWeather(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
    return data;
}

let shouldTheyGoOutside=async(first,last)=>{
    const people=await getPeople();
    const weather=await getWeather();
    if(first===undefined || last===undefined){
        throw "The name provided is empty";
    }
    if(typeof(first)!=="string"|| typeof(last)!=="string"){
        throw `the argument ${first} or the ${last} is not a string`;
    }
    first=capitalize(first);
    last=capitalize(last)
    const containsRecord = people.some( indi =>  indi.firstName === first && indi.lastName === last);
    if(containsRecord===false){
        throw "The given name is not in the records";
    }
    const foundRec=people.find(final=>final.firstName===first&& final.lastName===last);
    //console.log(foundRec)
    let zip=foundRec.zip;
    //console.log(zip)
    const weatherRec=weather.find(final=>final.zip===zip);
    if(weatherRec.temp>=34){
        return `"Yes,${first} should go outside"`;
    }
    else{
        return `"No,${first} should not go outside"`;
    }
}
module.exports={shouldTheyGoOutside};
