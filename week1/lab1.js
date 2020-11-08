/*const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let sum=0;
    sum += arr[0]*arr[0] + arr[1]*arr[1] + arr[2]*arr[2] ;
    return sum;
}*/

const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i]*arr[i];
    }
    return sum;

    }
const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(num==1)
    return 1;
    else if(num<1)
    return 0;
    else
    return questionTwo(num-1)+questionTwo(num-2);
    /*var previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= num; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }
    return next;*/
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    const vow = ['A', 'E', 'I', 'O', 'U'];
        let vowCount = 0;
        for( const v of text) {
            if( vow.includes(v.toUpperCase())) {
                vowCount++;
            }
        }
        return vowCount;
    
    
    }  
        




const questionFour = function questionFour(num) {
    // Implement question 4 here
    let fact=1;
    if(num<0)
    return NaN;
    else if(num==0)
    return 1;
    else{
        for(var i=1;i<=num;i++){
            fact=fact*i;
        }
        return fact;
    }
    
}

module.exports = {
    firstName: "Neil", 
    lastName: "Gupte", 
    studentId: "10445674",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};