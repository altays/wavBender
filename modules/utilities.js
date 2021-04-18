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

exports.checkConfig = (postfix, config) => {   
    // for instance, postfix string is "width:200,height:200,channels:1"
    // separate input string into an object
        // let tempConfigObj = new Object()
        // configArray = config.split(',')

        // for (let i = 0; i < configArray.length; i++) {
        // entry = configArray[i].split(':')
        // tempConfigObj[entry[0]] = entry[1]
        // }

        // console.log(tempConfigObj)
        // return tempConfigObj
        // returned object would be {width:"200",height:"200",channels:"1"}

    // read through the object
   
    switch(postfix){
        case 'm':
            // mp3 Config
            return "mp3";
        case 'j':
            // jpg Config
            return "jpg";
        case 'w':
            // wav config
            return "wav";
        case 'b':
            // bmp config
            return "bmp"
        case 'g':
            // gif config
            return "gif";
        case 'r':
            // raw config
            return "raw"
        default:
            // no config
            return 
    }
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


// config helper functions - return an object

// mp3 config (just handle these in this file, don't export them)


// bmp config


// gif config


// raw config


// wav config


// jpg config