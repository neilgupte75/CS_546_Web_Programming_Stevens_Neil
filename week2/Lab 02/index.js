const arrayF=require('./arrayUtils.js');
const stringF=require('./stringUtils');
const objF=require('./objUtils');

// Head Tests
try {
   // Should Pass
   const headOne = arrayF.isEqual([1, 2, 3], [1, '2', 3]);
   console.log('head passed successfully');
   console.log(headOne);
} catch (e) {
   if (e instanceof ReferenceError) {
       console.log("Please check the input")
   }
   console.error('head failed test case');
   console.log(e);
}
try {
   // Should Fail
   const headTwo = arrayF.isEqual([1, 2, 3], [1, '2', 3]);
   console.error('head did not error');
} catch (e) {
   if (e instanceof ReferenceError) {
       console.log("Please check the input")
   }
   console.log('head failed successfully');
   console.log(e);
}


try {
   // Should Pass
   const headOne = arrayF.remove([1, 2, 3]);
   console.log('head passed successfully');
   console.log(headOne);
} catch (e) {
   if (e instanceof ReferenceError) {
       console.log("Please check the input")
   }
   console.error('head failed test case');
   console.log(e);
}
try {
   // Should Fail
   const headTwo = arrayF.remove([1, 2, 3]);
   console.error('head did not error');
} catch (e) {
   if (e instanceof ReferenceError) {
       console.log("Please check the input")
   }
   console.log('head failed successfully');
   console.log(e);
}
try {
    // Should Pass
    const headOne = arrayF.head([2, 3, 4]);
    console.log('head passed successfully');
    console.log(headOne);
 } catch (e) {
    if (e instanceof ReferenceError) {
        console.log("Please check the input")
    }
    console.error('head failed test case');
    console.log(e);
 }
 try {
    // Should Fail
    const headTwo = arrayF.head(123);
    console.error('head did not error');
 } catch (e) {
    if (e instanceof ReferenceError) {
        console.log("Please check the input")
    }
    console.log('head failed successfully');
    console.log(e);
 }

 //range Tests 
 try {
    // Should Pass
    const headOne = arrayF.range(4,'hi');
    //console.log(headOne);
    console.log('range passed successfully');
    console.log(headOne);
 } catch (e) {
    if (e instanceof ReferenceError) {
        console.log("Please check the input")
    }
    console.error('range failed test case');
    console.log(e);
 }
 try {
    // Should Fail
    const headTwo = arrayF.range('hello');
    console.error('range did not error');
 } catch (e) {
    if (e instanceof ReferenceError) {
        console.log("Please check the input")
    }
    console.log('range failed successfully');
    console.log(e);
 }


 //repeat Tests

 try {
    // Should Pass
    const headOne = stringF.repeat("foo",3);
    //console.log(headOne);
    console.log('repeat passed successfully');
    console.log(headOne);
 } catch (e) {
    if (e instanceof ReferenceError) {
        console.log("Please check the input")
    }
    console.error('repeat failed test case');
    console.log(e);
 }
 try {
    // Should Fail
    const headTwo = stringF.repeat(2,2);
    console.error('repeat did not error');
 } catch (e) {
    if (e instanceof ReferenceError) {
        console.log("Please check the input")
    }
    console.log('repeat failed successfully');
    console.log(e);
 }
 
 try {
   // Should Pass
   const headOne = stringF.repeat("foo",3);
   //console.log(headOne);
   console.log('repeat passed successfully');
   console.log(headOne);
} catch (e) {
   if (e instanceof ReferenceError) {
       console.log("Please check the input")
   }
   console.error('repeat failed test case');
   console.log(e);
}
try {
   // Should Fail
   const headTwo = stringF.repeat(2,2);
   console.error('repeat did not error');
} catch (e) {
   if (e instanceof ReferenceError) {
       console.log("Please check the input")
   }
   console.log('repeat failed successfully');
   console.log(e);
}



//smush Tests
 
 try {
    // Should Pass
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };

    const firstSecondThird = objF.smush(first, second, third);
    //console.log(firstSecondThird);
    console.log('smush passed successfully');
    console.log(firstSecondThird);
 } catch (e) {
    if (e instanceof ReferenceError) {
        console.log("Please check the input")
    }
    console.error('smush failed test case');
    console.log(e);
 }
 try {
    // Should Fail
    const first = { x: 2, y: 3};

    const firstSecondThird = objF.smush(first);
    console.error('smush did not error');
 } catch (e) {
    if (e instanceof ReferenceError) {
        console.log("Please check the input")
    }
    console.log('smush failed successfully');
    console.log(e);
 }