function setBlastOff(countDown) {
    console.log('Blast Off in...');

    for (let i=countDown; i>=0; i--) {

        if (i===0) {
            console.log('🚀 Blast Off!')
        } else {
            let countDownText = i + "*".repeat(i);
            console.log(countDownText);
        }
    }

}


const blastOff = setBlastOff(10);