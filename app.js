const fs = require('fs');
const util = require('util')
const readFile = util.promisify(fs.readFile);

// test string - node app.js testfile.txt outfile -f=w

// let nodePath, filePath, args;
[nodePath, filePath, ...args] = process.argv;

function fileRead(file) {
    return readFile(file, 'utf8')
}

let formatType, bentFileName, header, newHex, glitchData, inputType;
bentFileName = "";
[nodePath, filePath,  readFileName, outputFileName, ...args] = process.argv;

function checkArgument(arg) {
    let prefix = arg.trim().slice(0,2);
    let postfix = arg.trim().slice(3);
    
    // output file type
    if (prefix == "-f") {
        switch(postfix){
            case 'm':
                formatType = ".mp3";
                break;
            case 'j':
                formatType= ".jpg";
                break;
            case 'w':
                formatType = ".wav"
                break;
            case 'b':
                formatType = ".bmp"
                break;
            case 'g':
                formatType = ".gif"
                break;
            case 'r':
                formatType = ".raw"
                break;
            default:
                formatType = ".raw"
                break;
        }
    }
}

function generateData(inputData, outputType) {
    switch(outputType){
        case '.mp3':
            header = generateHeaderMP3(inputData);
            newHex = modifyHexMP3(inputData);
            break;
        case '.jpg':
            header = generateHeaderJPG(inputData);
            newHex = modifyHexJPG(inputData);
            break;
        case '.wav':
            header = generateHeaderWAV(inputData);
            newHex = modifyHexWAV(inputData);
            break;
        case '.bmp':
            header = generateHeaderBMP(inputData);
            newHex = modifyHexBMP(inputData);
            break;
        case '.gif':
            header = generateHeaderGIF(inputData);
            newHex = modifyHexGIF(inputData);
            break;
        case '.raw':
            header = generateHeaderRAW(inputData);
            newHex = modifyHexRAW(inputData);
            break;
    }
}

function generateHeaderMP3() {
    return "MP3 Header"
}

function modifyHexMP3() {
    return "MP3 Hex"
}

function generateHeaderJPG() {
    return "JPG Header"
}

function modifyHexJPG() {
    return "JPG Hex"
}

function generateHeaderWAV() {
    return "WAV Header"
}

function modifyHexWAV() {
    return "WAV Hex"
}

function generateHeaderBMP() {
    return "BMP Header"
}

function modifyHexBMP() {
    return "BMP Hex"
}

function generateHeaderGIF() {
    return "GIF Header"
}

function modifyHexGIF() {
    return "GIF Hex"
}

function  generateHeaderRAW() {
    return "RAW Header"
}

function modifyHexRAW() {
    return "RAW Hex"
}

fileRead(readFileName).then(data => {
    const Buf = Buffer.from(data, "utf8").toString('hex');

    args.forEach(arg => {
        checkArgument(arg);
    })

    bentFileName = `${outputFileName}${formatType}`;
    // console.log(bentFileName);

    generateData(Buf, formatType);
    // using file format boolean variables and conditional logic...
        // write header for file
        // process existing hex based on file type

    // then, combine the header and new hex; write to new file
    glitchData = header + newHex;

    console.log(glitchData)

    // fs.writeFile(bentFileName, glitchData, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    //   });
})

// expanding

    // after fileRead and converting to hex... 
        // create header based on hex 
        // create new hex based on existing hex (and type of format)
        // in new variable, combine header and new hex, then write that to a new file
    // if output file name already exists, add a number after it 