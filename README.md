# text2other

To run, type "node app.js testFile.txt outfile -f=<m/w/j/g/r/b>". This will use "testfile.txt" from the inputs folder as the source and save a new file starting with the name "outfile." The output file will be saved in the "outputs" folder separated by extension. To use a different file, add a new file to the inputs folder and specify the new file name instead of "testFile.txt". 

You will need NodeJS to run this.

Currently supports creating wav files from any kind of input.

Future plans:
* implement support for mp3, raw, jpg, gif, bmp, and other formats
* utilities
* general github niceties
* clean up code