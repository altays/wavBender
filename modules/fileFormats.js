const bmp = require('./bmp')
const gif = require('./gif');
const jpg = require('./jpg');
const mp3 = require('./mp3');
const raw = require('./raw');
const wav = require('./wav');
// import utilities for config checking

// add config parameter to each of these

generateHeaderMP3 = (inputData) => {
    return mp3.header(inputData);
}

modifyHexMP3 = (inputData) => {
    return mp3.hex(inputData);
}

generateHeaderJPG = (inputData) => {
    return jpg.header(inputData);
}

modifyHexJPG = (inputData) => {
    return jpg.hex(inputData);
}

generateHeaderWAV = (inputData) => {
    return wav.header(inputData);
}

modifyHexWAV = (inputData) => {
    return wav.hex(inputData);
}

generateHeaderBMP = (inputData) => {
    return bmp.header(inputData);
}

modifyHexBMP = (inputData) => {
    return bmp.hex(inputData);
}

generateHeaderGIF = (inputData) => {
    return gif.header(inputData)
}

modifyHexGIF = (inputData) => {
    return gif.header(inputData)
}

generateHeaderRAW = (inputData) => {
    return raw.header(inputData)
}

modifyHexRAW = (inputData) => {
    return raw.hex(inputData)
}

exports.generateData = (inputData, outputType) => {
    // add config parameter above

    // might need to copy the .wav format for the others and export bytes

    // add config param to each of the generate/modify functions

    let header, newHex;
    switch(outputType){
        case '.mp3':
            header = generateHeaderMP3(inputData);
            newHex = modifyHexMP3(inputData);
            return header+newHex;
        case '.jpg':
            header = generateHeaderJPG(inputData);
            newHex = modifyHexJPG(inputData);
            return header+newHex;
        case '.wav':
            header = generateHeaderWAV(inputData);
            newHex = modifyHexWAV(inputData);
            arr = [header,newHex];
            buf = Buffer.concat(arr);
            return buf;
        case '.bmp':
            header = generateHeaderBMP(inputData);
            newHex = modifyHexBMP(inputData);
            return header+newHex;
        case '.gif':
            header = generateHeaderGIF(inputData);
            newHex = modifyHexGIF(inputData);
            return header+newHex;
        case '.raw':
            header = generateHeaderRAW(inputData);
            newHex = modifyHexRAW(inputData);
            return header+newHex;
    }
}