const fs = require('fs');
const util = require('util')
const readFile = util.promisify(fs.readFile);
const formats = require('./fileFormats');

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
            header = formats.generateHeaderMP3(inputData);
            newHex = formats.modifyHexMP3(inputData);
            break;
        case '.jpg':
            header = formats.generateHeaderJPG(inputData);
            newHex = formats.modifyHexJPG(inputData);
            break;
        case '.wav':
            header = formats.generateHeaderWAV(inputData);
            newHex = formats.modifyHexWAV(inputData);
            break;
        case '.bmp':
            header = formats.generateHeaderBMP(inputData);
            newHex = formats.modifyHexBMP(inputData);
            break;
        case '.gif':
            header = formats.generateHeaderGIF(inputData);
            newHex = formats.modifyHexGIF(inputData);
            break;
        case '.raw':
            header = formats.generateHeaderRAW(inputData);
            newHex = formats.modifyHexRAW(inputData);
            break;
    }
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