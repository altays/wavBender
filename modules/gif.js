// http://giflib.sourceforge.net/whatsinagif/bits_and_bytes.html
// http://giflib.sourceforge.net/whatsinagif/animation_and_transparency.html
// http://fileformats.archiveteam.org/wiki/GIF#Animated_GIF
// going to want to use the 89a format - allows for animated gifs

// issues:
    // it is opening in vscode, but it is opening as a transparent gif

exports.header = (inputData, configObj) => {
    let header, input, headerStr;
    let gifHead, logicalScreenDescriptor, cWidth, cHeight, packedField1, backgroundColorAspect, pixelAspectRatio;
    let globalColorTable;
    let applicationExtension;
   
    gifHead = "474946383961" // "GIF89a"
    cWidth = "6400" //600 pixels // might need to swap these values
    cHeight = "6400" // 600 pixels // might need to swap these values *58 and 02
    packedField1 = "91" //global color table is present, 2 bits/pixel, decrasing importance, 2 colors in table
    backgroundColorAspect = "FF";
    pixelAspectRatio = "01"
    logicalScreenDescriptor = cWidth + cHeight + packedField1 + backgroundColorAspect + pixelAspectRatio;

    globalColorTable = "" // 2 colors set in packedField1, need 3 hex values for RGB
    for (let i = 0; i < 12; i++) {
        globalColorTable += inputData[i]
    }

    globalColorTable = globalColorTable.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join(""); // converting from utf to hex. thank stack overflow

    // application extension
    applicationExtension = "21FF0B4E45545343415045322E30"

    header = Buffer.alloc(gifHead.length + logicalScreenDescriptor.length + globalColorTable.length + applicationExtension.length);
    headerStr = gifHead + logicalScreenDescriptor + globalColorTable + applicationExtension;
    header = Buffer.from(headerStr, "hex")
    console.log(header.length)
    return header;
}

exports.body = (inputData, configObj) => {

    let graphicControlExtension, extensionIntroducer, graphicControlLabel,byteSize,packedField2,delayTime,transparentColorIndex;
    let imageDescriptor, imageSeparator, imageLeft, imageTop, imageWidth, imageHeight, packedField3;
    let imageData, lzwMinCodeSize, dataSubBlock, blockSize, blockTerminator, imageDataChunk;
    let trailer;

    cWidth = "6400" //600 pixels // might need to swap these values
    cHeight = "6400" // 600 pixels // might need to swap these values *58 and 02
    dataChunkSize = 10 // use this to determine how many values get grabbed at a time
    imageData = "";

    for (let i = 30; i < inputData.length; i+= dataChunkSize) {
        if (inputData.slice(i,i+dataChunkSize).length == dataChunkSize) {
            // graphic control extension
            extensionIntroducer = "21"
            graphicControlLabel = "F9" 
            byteSize = "00" 
            packedField2 ="00" 
            delayTime = "01" // this could be modified. need to translate numbers into hex
            transparentColorIndex = "55"  // this could be variable
            blockTerminator = "00"
            graphicControlExtension = extensionIntroducer + graphicControlLabel + byteSize + packedField2 + delayTime + transparentColorIndex + blockTerminator;

            // image descriptor
            imageSeparator = "2C"
            imageLeft = "01"; // this could be modified. need ot translate numbers into hex
            imageTop = "01"; // this could be modified. need ot translate numbers into hex
            imageWidth = cWidth; // this could be modified. need ot translate numbers into hex
            imageHeight = cHeight; // this could be modified. need ot translate numbers into hex
            packedField3 = "00"
            imageDescriptor = imageSeparator + imageLeft + imageTop + imageWidth + imageHeight + packedField3

            lzwMinCodeSize = "01" //this might be variable -> from 0 to 9
            imageDataChunk = inputData.slice(i,i+dataChunkSize).split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join(""); // converting from utf to hex. thank stack overflow
            // console.log(imageDataChunk)
            blockSize = imageDataChunk.length.toString(16) // hexadecimal version of the size of the block. so, this = dataSubBlock.toString(16)
            dataSubBlock = graphicControlExtension + imageDescriptor + lzwMinCodeSize + blockSize + imageDataChunk + blockTerminator;
            imageData += dataSubBlock;
        }
    }

    trailer = "3B"
    
    dataToWrite = imageData + trailer;
    body = Buffer.alloc(dataToWrite.length);
    body = Buffer.from(dataToWrite, "hex")    
    return body
}

exports.bodyHex = inputData => {
    
}