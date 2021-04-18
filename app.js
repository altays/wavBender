const fs = require('fs');
const util = require('util');
const format = require('./modules/fileFormats');
const utilities = require('./modules/utilities');
const readFile = util.promisify(fs.readFile);
const path = require('path');

// test string - node app.js testfile.txt outfile -f=w

function fileRead(file) {
    return readFile(file, 'utf8')
}

let formatType, bentFileName, glitchData;
[nodePath, filePath, readFileName, outputFileName, ...args] = process.argv;

fileRead(path.join("inputs/",readFileName)).then(data => {
    
    configObj = new Object();
    modData = data;

    args.forEach(arg => {
        let prefix = arg.trim().slice(0,2);
        let postfix = arg.trim().slice(3);
        if (prefix == "-f") {
            formatType = utilities.checkFormatType(postfix);
        }
        if (prefix == "-c") {
            configObj = utilities.checkConfig(postfix);
        }
        if (prefix == "-s") {
            modData = utilities.inputScrambler(data);
        }
    });

    const Buf = Buffer.from(modData, "utf8").toString('hex');

    let versionName = utilities.nameVersion(outputFileName)
    bentFileName = `${versionName}.${formatType}`;
    glitchData = format.generateData(Buf, formatType, configObj);

    fs.writeFile(path.join("outputs/",formatType,"/",bentFileName), glitchData, (err) => {
        if (err) console.log(err);
        console.log('The file has been saved!');
      });
})