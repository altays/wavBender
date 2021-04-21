exports.header = (inputData, configObj) => {
    let header, input, headerStr;
    let riff, fileSize, wave, riffCombined;
    let fmt, fmtLength, formatType, channels, sampleRate, sampleBits, bitRate, bitsPerSample, fmtCombined;
    let data, dataLength, dataCombined;

    header = Buffer.alloc(50);
    input = Buffer.from(inputData, "utf-8");
    riff = "52494646";
    wave = "57415645";
    headerLength = header.length;
    inputLength = input.length;
    fileSize = (headerLength + inputLength).toString(16);
    fileSizeBuf = Buffer.alloc(4)
    fileSizeBuf.write(fileSize, "utf-8")
    riffCombined = riff+fileSizeBuf.toString('hex')+wave;

    fmt = "666D7420";
    fmtLength = "10000000";
    formatType = "0100";
    channels = "0100"

    sampleRate = "44AC0000";
    sampleBits = "88510100";
    bitRate = "0200";
    bitsPerSample = "1000";
    fmtCombined = fmt + fmtLength + formatType + channels + sampleRate + sampleBits + bitRate + bitsPerSample;
    
    data = "64617461";
    dataLength = (inputData.length.toString(16))+"0".repeat(inputData.length.toString(16).length)
    dataCombined = data+dataLength;

    headerStr = riffCombined+fmtCombined+dataCombined;
    header.write(headerStr, "hex")
    return header;
}

exports.body = (inputData) => {
    var buffer = Buffer.from(inputData.trim(), "utf-8");
    return buffer
}

exports.bodyHex = inputData => {
    var buffer = Buffer.from(inputData, "hex");
    return buffer
}

// second function here if the argument is "hex" - if input text is hexcode. create a buffer from inputData without trimming?