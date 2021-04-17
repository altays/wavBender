exports.checkFormatType = (postfix) => {   
    let formatType;
    
    switch(postfix){
        case 'm':
            formatType = ".mp3";
            return formatType;
        case 'j':
            formatType= ".jpg";
            return formatType;
        case 'w':
            formatType = ".wav"
            return formatType;
        case 'b':
            formatType = ".bmp"
            return formatType;
        case 'g':
            formatType = ".gif"
            return formatType;
        case 'r':
            formatType = ".raw"
            return formatType;
        default:
            formatType = ".raw"
            return formatType;
    }
}