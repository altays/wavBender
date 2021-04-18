const fs = require('fs');
const util = require('util');
const format = require('./modules/fileFormats');
const utilities = require('./modules/utilities');
const readFile = util.promisify(fs.readFile);
const path = require('path')

// test string - node app.js testfile.txt outfile -f=w

function fileRead(file) {
    return readFile(file, 'utf8')
}

let formatType, bentFileName, header, newHex, glitchData;
[nodePath, filePath,  readFileName, outputFileName, ...args] = process.argv;

fileRead(path.join("inputs/",readFileName)).then(data => {
    const Buf = Buffer.from(data, "utf8").toString('hex');

    configObj = new Object();

    args.forEach(arg => {
        let prefix = arg.trim().slice(0,2);
        let postfix = arg.trim().slice(3);
        let params = {}
        // if argument begins with "-c", run through config checking and return those values as an object
            // example -> -c=width:200,height:200,channels:1
            // returned object would be {width:200,height:200,channels: 1}
            // then pass the config object into generateData()
        if (prefix == "-f") {
            formatType = utilities.checkFormatType(postfix);
        }
        if (prefix == "-c") {
            configObj = utilities.checkConfig(postfix);
        }
    });

    let versionName = utilities.nameVersion(outputFileName)
    bentFileName = `${versionName}.${formatType}`;
    glitchData = format.generateData(Buf, formatType, configObj);

    fs.writeFile(path.join("outputs/",formatType,"/",bentFileName), glitchData, (err) => {
        if (err) console.log("error!");
        console.log('The file has been saved!');
      });
})