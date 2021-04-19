const fs = require('fs');
const path = require('path');

exports.checkFormatType = (postfix) => {   
    switch(postfix){
        case 'm':
            return "mp3";
        case 'j':
            return "jpg";
        case 'w':
            return "wav";
        case 'b':
            return "bmp"
        case 'g':
            return "gif";
        case 'r':
            return "raw"
        default:
            return "raw"
    }
}

exports.checkConfig = (postfix) => {   
    let tempConfigObj = new Object()
    configArray = postfix.split(',')

    for (let i = 0; i < configArray.length; i++) {
    entry = configArray[i].split(':')
    tempConfigObj[entry[0]] = entry[1]
    }

    return tempConfigObj
}

nameVersion = (outputName) => {
    let dateAndTime = Date.now();
    return outputName + dateAndTime;
}

exports.nameVersion = nameVersion;

// from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

scrambleText = (value, situ, repeats) => {
    tempVal = value;
    switch (situ) {
        case 0:
            tempVal = tempVal.toUpperCase();
            tempVal = tempVal.repeat(repeats)
            break;
        case 1:
            tempVal = tempVal.toLowerCase();
            tempVal = tempVal.repeat(repeats)
            break;
        case 2:
            tempVal = tempVal;
            tempVal = tempVal.repeat(repeats)
            break;
    }
    return tempVal;
}

exports.inputScrambler = (inputText) => {
    let inputScrambled = "";
    // mess with these values if you want to change the intensity of the randomness
    let rMin = 10;
    let rMax = 1000;

    for (let i = 0; i < inputText.length; i++) {

        let tempVal = inputText[i]
        let value;
        let randNums = [getRandomIntInclusive(1,2),getRandomIntInclusive(0,2),getRandomIntInclusive(2,getRandomIntInclusive(rMin,rMax)), getRandomIntInclusive(1,getRandomIntInclusive(rMin,rMax))]

        if (randNums[0] = 0) {
            // skipping over this value
            value = ""
        } else if (randNums[0] = 1) {
            // using the index
            value = scrambleText(tempVal,randNums[1],randNums[3]);
        } else {
            tempVal = tempVal.slice(0,randNums[2]);
            value = scrambleText(tempVal,randNums[1],randNums[3]);
        }
        inputScrambled += value;        
    }

    return inputScrambled
}