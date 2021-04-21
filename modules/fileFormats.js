const bmp = require('./bmp')
const gif = require('./gif');
const jpg = require('./jpg');
const mp3 = require('./mp3');
const wav = require('./wav');

exports.generateData = (inputData, outputType, configObj) => {
    let header, newHex;
    switch(outputType){
        case 'mp3':
            header = mp3.header(inputData);
            newHex = mp3.body(inputData);
            break;
        case 'jpg':
            header = jpg.header(inputData);
            newHex = jpg.body(inputData);
            break;
        case 'wav':
            header = wav.header(inputData, configObj);
            newHex = wav.body(inputData, configObj);
            break;
        case 'bmp':
            header = bmp.header(inputData);
            newHex = bmp.body(inputData);
            break;
        case 'gif':
            header = gif.header(inputData, configObj);
            newHex = gif.body(inputData, configObj);
            break;
    }
    arr = [header,newHex];
    buf = Buffer.concat(arr);
    return buf;
}

// if incoming data is hexcode
exports.generateDataHex = (inputData, outputType, configObj) => {
    let header, newHex;
    switch(outputType){
        case 'mp3':
            header = mp3.header(inputData);
            newHex = mp3.bodyHex(inputData);
            break;
        case 'jpg':
            header = jpg.header(inputData);
            newHex = jpg.bodyHex(inputData);
            break;
        case 'wav':
            header = wav.header(inputData, configObj);
            newHex = wav.bodyHex(inputData, configObj);
            break;
        case 'bmp':
            header = bmp.header(inputData);
            newHex = bmp.bodyHex(inputData);
            break;
        case 'gif':
            header = gif.header(inputData, configObj);
            newHex = gif.bodyHex(inputData, configObj);
            break;
    }
    arr = [header,newHex];
    buf = Buffer.concat(arr);
    return buf;
}