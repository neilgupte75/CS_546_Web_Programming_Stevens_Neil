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

//console.log(capitalize("123"));

let repeat=(string,num)=>{
    if(typeof(string)!=='string'){
        throw `The input ${string} is not of string type`;
    }
    if(typeof(num)!=='number'){
        throw `The input ${num} is not a number`;
    }
    if(num<0){
        throw "number should not be negative";
    }
    let rString = "";
    while (num > 0) {
     rString += string;
     num--;
    }
  return `"${rString}"`;
}

//console.log(repeat('akjkjljljk',2))

let countChars=(string)=>{
    if(typeof(string)!=='string'){
        throw `The input ${string} is not of string type`;
    }
    let array= string.split("");
    let counts = {};
    array.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    return counts;
}

//console.log(countChars("Hello, the pie is in the oven"))

module.exports={capitalize,repeat,countChars};