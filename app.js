const fs = require('fs');
const util = require('util');
const format = require('./modules/fileFormats');
const utilities = require('./modules/utilities');
const readFile = util.promisify(fs.readFile);
const path = require('path')

// test string - node app.js inputs/testfile.txt outfile -f=w

function fileRead(file) {
    return readFile(file, 'utf8')
}


let formatType, bentFileName, header, newHex, glitchData;
[nodePath, filePath,  readFileName, outputFileName, ...args] = process.argv;

fileRead(readFileName).then(data => {
    const Buf = Buffer.from(data, "utf8").toString('hex');

    args.forEach(arg => {
        let prefix = arg.trim().slice(0,2);
        let postfix = arg.trim().slice(3);
        if (prefix == "-f") {
            formatType = utilities.checkFormatType(postfix);
        }
    });

    let versionName = utilities.nameVersion(outputFileName)
    bentFileName = `${versionName}${formatType}`;
    glitchData = format.generateData(Buf, formatType);

    fs.writeFile(bentFileName, glitchData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
})

// expanding

    // after fileRead and converting to hex... 
        // create header based on hex 
        // create new hex based on existing hex (and type of format)
        // in new variable, combine header and new hex, then write that to a new file
    // if output file name already exists, add a number after it 