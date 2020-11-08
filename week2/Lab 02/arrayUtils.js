let head=(array)=>{
    if(Array.isArray(array)==0)
    {
        throw "It is not an array";
    }
    if(array.length == 0) {
        throw "Array is empty";
    }
    /*for(let i=0;i<array.length;i++)
         {
             if(typeof array[i]!="number"){
                throw "All elements are not numbers";
            }
         }*/ 
    return array[0];
}


let last=(array)=>{
    if(Array.isArray(array)==0)
    {
        throw "It is not an array";
    }
    if (array === undefined){
        throw "Array does not exist";
    }
    if(array.length == 0) {
        throw "Array is empty";
    }    
    /*for(let i=0;i<array.length;i++)
            {
                if(typeof array[i]!="number"){
                    throw "All elements are not numbers";
                }
            }*/ 
    return array[array.length-1];
}


let remove=(array,index)=>{
    if(Array.isArray(array)==0)
    {
        throw "It is not an array";
    }
    if (array === undefined){
        throw "Array does not exist";
    }
    if(array.length == 0) {
        throw "Array is empty";
    } 
    if(index<0 || index>=array.length){
        throw "Index is not in array"
    }    
    /*for(let i=0;i<array.length;i++)
            {
                if(typeof array[i]!="number"){
                    throw "All elements are not numbers";
                }
            }*/ 
    array.splice(index,1);
    return array;
}


let range=(end,value)=>{
    if(typeof(end)!="number"){
        throw  `the argument ${end} should  be number `;
    }
    if(end<=0)
        throw `the argument ${end} should be greater than 0 `;
    if(value===undefined)
        {
            let arr=[];
            for(let i=0;i<end;i++){
                arr.push(i);
            }
        return arr;
        }
    let arr=[];
    for(let i=0;i<end;i++){
        arr[i]=value;
    }
    return arr;

}


let countElements=(array)=>{
    if(Array.isArray(array)==0)
    {
        throw "It is not an array";
    }
    if (array === undefined){
        throw "Array does not exist";
    }

    var counts = {};
    array.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });//stackoverflow
    return counts;

}


let isEqual=(arrayOne,arrayTwo)=>{
    if(Array.isArray(arrayOne)==0 || Array.isArray(arrayTwo)==0)
    {
        throw "It is not an array";
    }
    /*for(let i=0;i<arrayOne.length;i++)
         {
             if(typeof arrayOne[i]!="number"){
                throw "All elements are not numbers in FIRST ARRAY";
            }
         }*/
    for(let i=0;i<arrayTwo.length;i++){
    for(let j=0;j<arrayOne.length;j++)
        {
             if(typeof arrayTwo[i]!=typeof arrayOne[j]){
                throw "All elements  dont have similar type";
            }
        }
    }
    if(arrayOne.length!=arrayTwo.length) 
        return false;
    else if(arrayOne.length==0)
    {
        return true;
    }
    else
    {  
        for(var i=0;i<arrayOne.length;i++){ 
            if(arrayOne[i]!=arrayTwo[i]) 
            return false;
            return true;
        } 
    }
}

/*console.log(head([1,2,3]));
console.log(last([0,0,1]));
console.log(remove([1,2,3,4,5],2));
console.log(range(4,"hello"));
console.log(countElements([13, '13', 13, 'hello', true, true]));
console.log(isEqual([1,2,3],[1,2,3]));
*/
module.exports={head,last,remove,range,countElements,isEqual};