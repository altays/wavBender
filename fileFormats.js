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
            return header+newHex;
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