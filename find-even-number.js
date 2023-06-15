function findNumber(paramArray) {

    let statusCheck = null;

    for(i=0; i<paramArray.length; i++) {
        if(paramArray[i] % 2 == 0) {
            statusCheck = "✅";
        } else {
            statusCheck = "❌";
        }

    console.log(`${statusCheck} ${paramArray[i]}`);
    }
}
const thisArray = [7,18,23,24,54,21,3,1,8,11,10]
const result = findNumber(thisArray)