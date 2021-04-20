// http://giflib.sourceforge.net/whatsinagif/bits_and_bytes.html
// http://giflib.sourceforge.net/whatsinagif/animation_and_transparency.html
// http://fileformats.archiveteam.org/wiki/GIF#Animated_GIF
// going to want to use the 89a format - allows for animated gifs


// not sure why this isn't working :///////////
exports.header = (inputData, configObj) => {
    let header, input, headerStr;
    let gifHead, logicalScreenDescriptor, cWidth, cHeight, packedField1, backgroundColorAspect, pixelAspectRatio;
    let globalColorTable;
   
    gifHead = "474946383961" // "GIF89a"
    cWidth = "000A" //600 pixels // might need to swap these values
    cHeight = "000A" // 600 pixels // might need to swap these values *58 and 02
    packedField1 = "FA" //global color table is present, 8 bits/pixel, decrasing importance, 8 colors in table
    backgroundColorAspect = "00";
    pixelAspectRatio = "00"
    logicalScreenDescriptor = cWidth + cHeight + packedField1 + backgroundColorAspect + pixelAspectRatio;

    globalColorTable = "" // 8 colors set in packedField1, need 3 hex values for RGB
    for (let i = 0; i < 24; i++) {
        globalColorTable += inputData[i]
    }

    globalColorTable = globalColorTable.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join(""); // converting from utf to hex. thank stack overflow

    header = Buffer.alloc(gifHead.length + logicalScreenDescriptor.length + globalColorTable.length);
    headerStr = gifHead + logicalScreenDescriptor + globalColorTable ;
    header = Buffer.from(headerStr, "hex")
    console.log(header.length)
    return header;
}

exports.hex = (inputData, configObj) => {

    let graphicControlExtension, extensionIntroducer, graphicControlLabel,byteSize,packedField2,delayTime,transparentColorIndex;
    let imageDescriptor, imageSeparator, imageLeft, imageTop, imageWidth, imageHeight, packedField3;
    let imageData, lzwMinCodeSize, dataSubBlock, blockSize, blockTerminator, imageDataChunk;
    let trailer;

    cWidth = "000A" //600 pixels // might need to swap these values
    cHeight = "000A" // 600 pixels // might need to swap these values *58 and 02
    dataChunkSize = 10 // use this to determine how many values get grabbed at a time
    imageData = "";

    for (let i = 30; i < inputData.length; i+= dataChunkSize) {
        
        // graphic control extension
        extensionIntroducer = "21"
        graphicControlLabel = "F9" 
        byteSize = "04" 
        packedField2 ="00" 
        delayTime = "00" // this could be modified. need to translate numbers into hex
        transparentColorIndex = "99" 
        blockTerminator = "00"
        graphicControlExtension = extensionIntroducer + graphicControlLabel + byteSize + packedField2 + delayTime + transparentColorIndex + blockTerminator;

        // image descriptor
        imageSeparator = "2C"
        imageLeft = "00"; // this could be modified. need ot translate numbers into hex
        imageTop = "00"; // this could be modified. need ot translate numbers into hex
        imageWidth = cWidth; // this could be modified. need ot translate numbers into hex
        imageHeight = cHeight; // this could be modified. need ot translate numbers into hex
        packedField3 = "00"
        imageDescriptor = imageSeparator + imageLeft + imageTop + imageWidth + imageHeight + packedField3
        
        lzwMinCodeSize = "03" //this might be variable?
        imageDataChunk = inputData.slice(i,i+dataChunkSize).split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join(""); // converting from utf to hex. thank stack overflow
        
        blockSize = imageDataChunk.length.toString(16) // hexadecimal version of the size of the block. so, this = dataSubBlock.toString(16)
        dataSubBlock = graphicControlExtension + imageDescriptor + lzwMinCodeSize + blockSize + imageDataChunk + blockTerminator;
        imageData += dataSubBlock;
    }

    trailer = "3B"
    
    dataToWrite = imageData + trailer;
    body = Buffer.alloc(dataToWrite.length);
    body = Buffer.from(dataToWrite, "hex")    
    return body
}