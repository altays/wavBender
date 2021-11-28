const wav = require('./wav');

exports.generateData = (inputData, outputType, configObj) => {
    let header, newHex;
    switch(outputType){
        case 'wav':
            header = wav.header(inputData, configObj);
            newHex = wav.body(inputData, configObj);
            break;
       default:
            header = wav.header(inputData, configObj);
            newHex = wav.body(inputData, configObj);
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
        case 'wav':
            header = wav.header(inputData);
            newHex = wav.bodyHex(inputData);
            break;
        default:
            header = wav.header(inputData);
            newHex = wav.bodyHex(inputData);
            break;

    }

    arr = [header,newHex];
    buf = Buffer.concat(arr);
    return buf;
}