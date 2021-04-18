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

exports.nameVersion = (outputName) => {
    let dateAndTime = Date.now();
    return outputName + dateAndTime;
}

exports.scrambleInput = (inputFile, saveBool) => {
    // read through input file
        // scramble in different ways - shuffle, repeat random strings, etc.
    // if saveBool is true, write the scrambled file in inputs 
    // return scrambled input
}