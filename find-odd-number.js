/* 
----- 1. SETUP
1) Declare a function and invoke the function by passing an argument to its perameter.
2) Check the function by the console logging the parameter.
---------------

----- 2. LOOP THE PARAMETER
1) Create a forloop that loops through the prameter.
2) Console log each index of theforloop.
3) Console log each value or the array.

---- 3. CONDITIONAL STATEMENT
1) Check if each value of the array is odd.
*/

function findNumber(paramArray) {
    
    let statusCheck = null;

    for(i=0; i<paramArray.length; i++) {
        if(paramArray[i] % 2 !== 0) {
            statusCheck = "✅";
        } else {
            statusCheck = "❌";
        }

    console.log(`${statusCheck} ${paramArray[i]}`);
    }

}
const thisArray = [2,4,16,5,1,4,65,8,3,82,5,2];
const result = findNumber(thisArray)