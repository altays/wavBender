const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const path = require('path');
const utilities = require('../modules/utilities');

// separates the header and body from a wav file, returns the bytes from the body

function fileRead(file) {
    return readFile(file, 'hex')
}

[nodePath, filePath, readFileName, ...args] = process.argv;

fileRead(path.join('inputs/', readFileName)).then(data => {
    let readFileNameNoExt = readFileName.slice(0,readFileName.length-4);
   
    let body = data.slice(176,data.length)
    let wavBody = Buffer.alloc(body.length)
    wavBody.write(body, "hex")

    let versionName = utilities.nameVersion(readFileNameNoExt)

    fs.writeFile("inputs/" + readFileNameNoExt + versionName + ".txt", wavBody.toString('hex'), (err) => {
        if (err) console.log(err);
        else console.log('The file has been saved!');
    });

})