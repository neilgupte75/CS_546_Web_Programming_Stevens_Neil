const dic={
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
};
function checkInput(str){
    if(typeof(str==='string'))
        return str;
    else
        throw "Input is not a string" ;
    }
const lookupDefinition=function lookupDefinition(str){
        checkInput(str)
        if(dic[str] != undefined) 
            return dic[str];
        else
            throw "The string is not in dictionary";
        }
const getWords=function getWords(value){
    checkInput(value);
        let obj1=Object.keys(dic).find(key => dic[key] === value);
    if(obj1==undefined){
        throw "Word not found";
    }
    return obj1;
}

module.exports={lookupDefinition,getWords};
