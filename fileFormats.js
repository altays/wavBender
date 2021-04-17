generateHeaderMP3 = (inputData) => {
    return "MP3 Header"
}

modifyHexMP3 = (inputData) => {
    return "MP3 Hex"
}

generateHeaderJPG = (inputData) => {
    return "JPG Header"
}

modifyHexJPG = (inputData) => {
    return "JPG Hex"
}

generateHeaderWAV = (inputData) => {
    return "WAV Header"
}

modifyHexWAV = (inputData) => {
    return "WAV Hex"
}

generateHeaderBMP = (inputData) => {
    return "BMP Header"
}

modifyHexBMP = (inputData) => {
    return "BMP Hex"
}

generateHeaderGIF = (inputData) => {
    return "GIF Header"
}

modifyHexGIF = (inputData) => {
    return "GIF Hex"
}

generateHeaderRAW = (inputData) => {
    return "RAW Header"
}

modifyHexRAW = (inputData) => {
    return "RAW Hex"
}

exports.generateData = (inputData, outputType) => {
    let header, newHex, glitchData;
    switch(outputType){
        case '.mp3':
            header = generateHeaderMP3(inputData);
            newHex = modifyHexMP3(inputData);
            glitchData = header+newHex
            return glitchData;
        case '.jpg':
            header = generateHeaderJPG(inputData);
            newHex = modifyHexJPG(inputData);
            glitchData = header+newHex
            return glitchData;
        case '.wav':
            header = generateHeaderWAV(inputData);
            newHex = modifyHexWAV(inputData);
            glitchData = header+newHex
            return glitchData;
        case '.bmp':
            header = generateHeaderBMP(inputData);
            newHex = modifyHexBMP(inputData);
            glitchData = header+newHex
            return glitchData;
        case '.gif':
            header = generateHeaderGIF(inputData);
            newHex = modifyHexGIF(inputData);
            glitchData = header+newHex
            return glitchData;
        case '.raw':
            header = generateHeaderRAW(inputData);
            newHex = modifyHexRAW(inputData);
            glitchData = header+newHex
            return glitchData;
    }
}