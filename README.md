# text2other

## What?

This allows for converting files into hexcode (generateFile.js) and converting text files into wav/other types with a valid header (convertFile.js).

Input files are generated files live in the /inputs/ folder, outputs go into the /outputs/ file in their respective file format.

You will need NodeJS to run this.

Inspired by the works of Nick Briz and other glitch artists.

## How?

To convert a file into a wav, type "npm run wav". This sets the format to wav, input type to text, and scrambles the incoming text. This will also save a new file starting with the name "outfile", which will be saved in the outputs folder. To use a different file, add a new file to the inputs folder and specify the new file name instead of "testFile.txt". The inputs/ folder extension gets automatically parsed, so just use the file name and extension.

To convert a file into a gif, type "npm run gif". This uses a similar format to "npm run wav," and the input file can be set by replacing the textFile.txt name.

To convert any other file into text, type "npm run generate." This will read through the file specified (FILENAME.ext), will break it down into an array of unique 2 character chunks ("-s=2"), will remove the header if a wav file("-f=w"), and will loop over the array 100 times (-w=100), creating a file with 200 characters. This does not create a header. To then convert into a wav, run it back through the convertFile.js script, but replace the testfile.txt name with the name of the newly generated file. The resulting file can also be converted into a gif file using "npm run gif."

## Future plans

* implement support for png, mp3, jpg, gif (broken), bmp, and other formats
* config options to specify more things
* general github niceties
* clean up code
