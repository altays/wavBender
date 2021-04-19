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
            newHex = mp3.hex(inputData);
            break;
        case 'jpg':
            header = jpg.header(inputData);
            newHex = jpg.hex(inputData);
            break;
        case 'wav':
            header = wav.header(inputData, configObj);
            newHex = wav.hex(inputData, configObj);
            break;
        case 'bmp':
            header = bmp.header(inputData);
            newHex = bmp.hex(inputData);
            break;
        case 'gif':
            header = gif.header(inputData, configObj);
            newHex = gif.hex(inputData, configObj);
            break;
    }
    arr = [header,newHex];
    buf = Buffer.concat(arr);
    return buf;
}