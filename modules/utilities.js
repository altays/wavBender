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

exports.nameVersion = (outputName) => {
    // add date and time to output name, then return the combined result
    let dateAndTime = Date.now();
    return outputName + dateAndTime;
    // console.log(outputName + dateAndTime)
}