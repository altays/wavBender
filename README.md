# text2other

## What?

This allows for converting files into hexcode (generateFile.js) and converting text files into wav/other types with a valid header (convertFile.js).

Input files are generated files live in the /inputs/ folder, outputs go into the /outputs/ file in their respective file format.

You will need NodeJS to run this.

## How?

To convert a file into a wav, type "node convertFile.js testfile.txt outfile -f=w -t=t -s". This sets the format to wav, input type to text, and scrambles the incoming text. This will also save a new file starting with the name "outfile", which will be saved in the outputs folder. To use a different file, add a new file to the inputs folder and specify the new file name instead of "testFile.txt". The inputs/ folder extension gets automatically parsed, so just use the file name and extension.

To convert any other file into text, type "node generateFile FILENAME.ext -s=2 -f=w -w=100." This will read through the file specified (FILENAME.ext), will break it down into an array of unique 2 character chunks ("-s=2"), will remove the header ("-f=w"), and will loop over the array 100 times (-w=100), creating a file with 200 characters. This does not create a header. To then convert into a wav, run it back through the convertFile.js script, but replace the testfile.txt name with the name of the newly generated file. 

## Future plans

* implement support for png, mp3, jpg, gif (broken), bmp, and other formats
* config options to specify more things
* general github niceties
* clean up code