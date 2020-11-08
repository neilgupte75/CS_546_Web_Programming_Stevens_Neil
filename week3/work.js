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
async function getWork(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    return data;
}

let whereDoTheyWork=async(first,last)=>{
    const people=await getPeople();
    const work=await getWork();
    if(first===undefined || last===undefined){
        throw "The name provided is empty";
    }
    if(typeof(first)!=="string"|| typeof(last)!=="string"){
        throw `the argument ${first} or the ${last} is not a string`;
    }
    first=capitalize(first);
    last=capitalize(last);
    const containsRecord = people.some( indi =>  indi.firstName === first && indi.lastName === last);
    if(containsRecord===false){
        throw "The given name is not in the records";
    }
    const foundRec=people.find(final=>final.firstName===first && final.lastName===last);
    let ssn=foundRec.ssn;
    //console.log(ssn)
    const workRec=work.find(final=>final.ssn===ssn);
    //console.log(workRec)
    if(workRec.willBeFired===true){
        final=`"${first} ${last} - ${workRec.jobTitle} at ${workRec.company}.They will be fired.`
        //console.log(final)
        return final;
    }
    else{
        final=`"${first} ${last} - ${workRec.jobTitle} at ${workRec.company}.They will not be fired.`
        return final;
        //console.log(final)
    }
}

let findTheHacker=async(ip)=>{
    if(ip===undefined){
        throw "The ip is empty";
    }
    if(typeof(ip)!=="string"){
        throw `the format for ${ip} is invalid`;
    }
    const people=await getPeople();
    const work=await getWork();
    const containsRecord = work.some( indi =>  indi.ip === ip);
    if(containsRecord===false){
        throw "The given ip is not in the records";
    }
    const foundRecord = work.find( indi =>  indi.ip === ip);
    let ssn=foundRecord.ssn;
    const nameRecord=people.find(final=>final.ssn===ssn);
    let final=`"${nameRecord.firstName} ${nameRecord.lastName} is the hacker!"`;
    return final;
    

    

}
//findTheHacker("83.133.174.10");

module.exports={findTheHacker,whereDoTheyWork}