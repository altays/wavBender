// http://giflib.sourceforge.net/whatsinagif/bits_and_bytes.html
// http://giflib.sourceforge.net/whatsinagif/animation_and_transparency.html

exports.header = (inputData, configObj) => {
    // let header, input, headerStr;

    // header block
    // logical screen descriptor
    // global color table

    // header = Buffer.alloc(50);
    // input = Buffer.from(inputData, "utf-8");

    // if (configObj.channels != undefined) {
    //     if (configObj.channels == "mono".toLowerCase()) {
    //         channels = "0100";
    //     } else if (configObj.channels == "stereo".toLowerCase()) {
    //         channels = "0200";
    //     }
    // }

    // headerStr = riffCombined+fmtCombined+dataCombined;
    // header.write(headerStr, "hex")
    // return header;
}

exports.hex = (inputData) => {
    
    // graphics control extension
    // image descriptor
    // local color table
    // image data
    // plain text extension
    // application extension
    // comment extension
    // trailer - end of the file
    
    var buffer = Buffer.from(inputData.trim(), "utf-8");

    
    return buffer
}