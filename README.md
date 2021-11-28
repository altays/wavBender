# wavBender

## What?

This allows for creating valid wav files from other file formats.

Input files are generated files live in the /inputs/ folder, outputs go into the /outputs/ file in their respective file format. You will need NodeJS to run this.

## How?

To convert a file into a wav, type "npm run wav". This sets scrambles the incoming data and generates a wav file from it. This will also save a new file starting with the name "outfile", which will be saved in the outputs folder. To use a different file, add a new file to the inputs folder and specify the new file name instead of "testFile.txt". The inputs/ folder extension gets automatically parsed, so just use the file name and extension.

To convert a file into text, type "npm run generateInput." This will read through the file specified (FILENAME.ext), will break it down into an array of unique 2 character chunks ("-s=2"), will remove the header if a wav file("-f=w"), and will loop over the array 100 times (-w=100), creating a file with 200 characters. This does not create a header. To then convert into a wav, run it back through the convertFile.js script, but replace the testfile.txt name with the name of the newly generated file. 

An alternative to "npm run generateInput" is "npm run generateInputHex", which generates hexCode based on the text data but still outputs a .txt file. 

## Ways to Use

Some suggested uses include...

* use "npm run generateInput" on a wav to pull off the head and scramble the data, then run that through "npm run wav" after changing the file name in the package.json file

* use "npm run wav" to convert a text file (or other file type) into a wav file. Consider using "npm run generateInput" or "npm run generateInputHex" for different flavors of input

* clone the repo and develop your own algorithms for scrambling the data

## Future plans

* develop out config options
* develop other file format bends
* develop other ways to scramble raw data