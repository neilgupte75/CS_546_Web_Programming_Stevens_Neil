let extend=(...args)=>{
    if(args.length<2)
    {
        throw "Minimum 2 arguments required";
    }
    for(let i=0;i<args.length;i++){
        if(typeof(args[i])!="object"){
            throw "Inputs are not objects";
        }
    }
    
    let arr=args.reverse();
    return Object.assign({},...arr);

}


        



let smush=(...args)=>{
    if(args.length<2)
    {
        throw "Minimum 2 arguments required";
    }
    for(let i=0;i<args.length;i++){
        if(typeof(args[i])!="object"){
            throw "Inputs are not objects";
        }
    }
    return Object.assign({}, ...args);   
}

let mapValues=(object,func)=>{
    if(object===undefined||func===undefined){
        throw "Undefined entries"
    }
    if(typeof(object)!=="object" && typeof(func)!=="function"){
        throw "Object or the given function is incorrect";
    }
    if(object.length==0){
        throw "The object is empty";
    }
    /*let mapObj=Object.values(object).map(func);
    console.log(mapObj);*/
    let arr=Object.values(object);
    let mod=arr.map(func);
    let length=mod.length;
    let n=0;
    for(var key in object){
        object[key]=mod[n];
        n++;
    }
    return object;
}
   
/*
const first = (2:1,3:2);
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

const firstSecondThird = extend(third, first, second);
 //{ x: 2, y: 3, a: 70, z: 5, q: 10 }
*/

//console.log(firstSecondThird);


//let l=mapValues("Sig");
//console.log(l)

module.exports={extend,smush,mapValues};