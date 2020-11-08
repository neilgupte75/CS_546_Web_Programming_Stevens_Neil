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
    finalvalue=`${final.firstName} ${final.lastName}`
    return finalvalue;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //a.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    //console.log(counts);

//getPersonById(43);
//lexIndex(499)
//firstNameMetrics();
module.exports={getPersonById,getPeople};
