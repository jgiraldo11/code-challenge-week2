function checkBiggestint(paramArray) {

    let biggestInt = 0;
    let statusCheck = null;
    
    for(let i=0; i<paramArray.length; i++) {
        if (biggestInt < paramArray[i]) {
            biggestInt = paramArray [i];
            statusCheck = "✅";
    } else {
        statusCheck = "❌";
    }

    console.log(`${statusCheck} biggestInt = ${biggestInt} currentInt = ${paramArray[i]}`);
}

    return biggestInt;
}

const arrayInt = [131,257,361,234,100,900,276]

const resultBiggestInt = checkBiggestint(arrayInt);

console.log(`The biggest int out of ${arrayInt} is ${resultBiggestInt}`);

