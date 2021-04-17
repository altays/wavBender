exports.header = (inputData) => {
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
    channels = "0200"; // 9200 is stereo, 0100 is mono
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

exports.hex = (inputData) => {
    var buffer = Buffer.from(inputData.trim(), "utf-8");
    
    return buffer
}

// https://docs.rs/riff-wave/0.1.2/riff_wave/
// http://www.neurophys.wisc.edu/auditory/riff-format.txt