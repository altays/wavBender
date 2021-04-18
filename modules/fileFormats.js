const bmp = require('./bmp')
const gif = require('./gif');
const jpg = require('./jpg');
const mp3 = require('./mp3');
const raw = require('./raw');
const wav = require('./wav');

exports.generateData = (inputData, outputType, configObj) => {
    // add config parameter above

    // might need to copy the .wav format for the others and export bytes

    // add config param to each of the generate/modify functions

    let header, newHex;
    switch(outputType){
        case 'mp3':
            header = mp3.header(inputData);
            newHex = mp3.hex(inputData);
            return header+newHex;
        case 'jpg':
            header = jpg.header(inputData);
            newHex = jpg.hex(inputData);
            return header+newHex;
        case 'wav':
            header = wav.header(inputData, configObj);
            newHex = wav.hex(inputData, configObj);
            arr = [header,newHex];
            buf = Buffer.concat(arr);
            return buf;
        case 'bmp':
            header = bmp.header(inputData);
            newHex = bmp.hex(inputData);
            return header+newHex;
        case 'gif':
            header = gif.header(inputData);
            newHex = gif.hex(inputData);
            return header+newHex;
        case 'raw':
            header = raw.header(inputData);
            newHex = raw.hex(inputData);
            return header+newHex;
    }
}