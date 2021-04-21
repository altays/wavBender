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
        default:
            return "wav"
    }
}

exports.checkInputType = (postfix) => {   
    switch(postfix){
        case 't':
            return "text";
        case 'h':
            return "hex";
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

getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.getRandomIntInclusive = getRandomIntInclusive;

scrambleText = (value, situ, repeats) => {
    tempVal = value;
    switch (situ) {
        case 0:
            if (typeof tempVal == "string") {
                tempVal = tempVal.toUpperCase();
            }
            tempVal = tempVal.repeat(repeats)
            break;
        case 1:
            if (typeof tempVal == "string") {
                tempVal = tempVal.toLowerCase();
            }
            tempVal = tempVal.repeat(repeats)
            break;
        case 2:
            tempVal = tempVal;
            tempVal = tempVal.repeat(repeats)
            break;
    }
    return tempVal;
}

// chooses either one character, a set of characters, or skips over a character. If a / several characters, converts to upper/lower and then repeats
exports.inputScrambler = (inputText) => {
    let inputScrambled = "";
    // mess with these values to change the intensity of the randomness
    let rMin = 100;
    let rMax = 10000;

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