const axios = require('axios')
function findMinMax(myArray) {
    var lowest = Number.POSITIVE_INFINITY;
    var highest = Number.NEGATIVE_INFINITY;
    var tmp;
    for (var i=myArray.length-1; i>=0; i--) {
        tmp = myArray[i].id;
        if (tmp < lowest) lowest = tmp;
        if (tmp > highest) highest = tmp;
    }

  
    return [lowest,highest];
}

async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data;
}
let getPersonById=async(id)=>{
    const people=await getPeople();
    let a=[];
    a=findMinMax(people);
    if(id===undefined || typeof(id)!="number"){
        throw `THE ${id} is undefined or is not of proper type`;
    }
    if(id<a[0] || id>a[1]){
        throw `THE ${id} is out of bounds`;
    }
    const final=people.find(final=>final.id==id);
    finalvalue=`"${final.firstName} ${final.lastName}"`;
    return finalvalue;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let lexIndex=async(index)=>{
    const people=await getPeople();
    let a=[];
    a=findMinMax(people);
    if(index===undefined || typeof(index)!="number"){
        throw `THE ${index} is undefined or is not of proper type`;
    }
    if(index<a[0]-1 || index>a[1]-1){
        throw `THE ${index} is out of bounds`;
    }
    let final=[];
    final=people.sort((a, b) => a.lastName.localeCompare(b.lastName));//stackoverflow
    let finalvalue=final[index];
    let finalvaluereal=`"${finalvalue.firstName} ${finalvalue.lastName}"`;
    return finalvaluereal;

}

let firstNameMetrics=async()=>{
    const people=await getPeople();
    let stringbox="";
    people.forEach(function(obj){
    stringbox+=obj.firstName;
    })
    let stringlen=stringbox.length;
    let vow=0;
    stringbox=stringbox.toLowerCase();
    //loop through the string
    for (var i = 0; i <= stringbox.length - 1; i++) {
    
    //if a vowel, add to vowel count
        if (stringbox.charAt(i) == "a" || stringbox.charAt(i) == "e" || stringbox.charAt(i) == "i" || stringbox.charAt(i) == "o" || stringbox.charAt(i) == "u") {
        vow += 1;
        }
    }
    //console.log(vow)
    let conson=stringbox.length-vow;
    //console.log(conson)
    let stringarr=[];
    people.forEach(function(obj){
        stringarr.push(obj.firstName);
        })
    let long = stringarr.sort(function (a, b) { return b.length - a.length; })[0];
    //console.log(long);
    let short = stringarr.sort(function (a, b) { return a.length - b.length; })[0];
    //console.log(short);
    let disp={"totalLetters":stringlen,"totalVowels":vow,"totalConsonant":conson,"longestName":long,"shortestName":short};
    //console.log(disp);
    return disp;
}
    //a.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    //console.log(counts);

//getPersonById(43);
//lexIndex(499)
//firstNameMetrics();
module.exports={getPersonById,lexIndex,firstNameMetrics};
