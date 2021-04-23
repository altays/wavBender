const utilities = require('./utilities');

// MVP1 - png with critical chunks that displays in different programs
// MVP2 - png with ancillary chunks that displays in different programs

exports.header = (inputData) => {
    let signature, ihdrChunk, plteChunk;
    let idhrHead, ihdrWidth,ihdrHeight,ihdrBitDepth,ihdrColorType,ihdrCompression,ihdrFilter,ihdrInterlace;
    let colorTypes = ["00","02","03","04","06"];

    signature = "89504E470D0A1A0A" + "0000000D" //the second string isn't indicated in documentation but was found in a test png file

    idhrHead = "49484452" // "IDHR"

    // 4 byte integers - 600 pixels for both for testing
    ihdrWidth = "00000258";
    ihdrHeight= "00000258";

    // there's a whole formula for determining bit depth and color type - check PNG specification for more info
    ihdrColorType = colorTypes[utilities.getRandomIntInclusive(0,colorTypes.length-1)];
    ihdrBitDepth = utilities.pngBitDepth(ihdrColorType);
    
    // single byte integer - only 0 is valid
    ihdrCompression = "0";
    ihdrFilter = "0";

    ihdrInterlace = (utilities.getRandomIntInclusive(0,1)).toString();  // single byte, 1 or 0
 
    ihdrChunk = idhrHead + ihdrWidth + ihdrHeight + ihdrBitDepth + ihdrColorType + ihdrCompression + ihdrFilter + ihdrInterlace;

    // plte chunk needs to be divisble by three - three byte series


    return "PNG Header"
}

exports.body = (inputData) => {
    let idatChunk, chrmChunk, gamaChunk, spltChunk, iendChunk;
    
    return "PNG Hex"
}

exports.bodyHex = (inputData) => {
    let idatChunk, chrmChunk, gamaChunk, spltChunk, iendChunk;
    return "PNG Hex"
}

// https://en.wikipedia.org/wiki/Portable_Network_Graphics#File_format
// http://www.libpng.org/pub/png/spec/1.2/PNG-Chunks.html