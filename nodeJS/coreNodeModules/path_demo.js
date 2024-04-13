//Used to work with file directories

const { parse } = require("path");
const path=require("path");

//Basename -> returns only the name of the file from the complete file directory
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename)); 
//This output is the same as console.log(__dirname);

//File Extension
console.log(path.extname(__filename))

//parse - creates an objext with different parts of the path
console.log(parse(__filename))

//Concatenate paths
var newPath=path.join(__dirname,"folder","join.js");
//appends folder and file specified at the end of path
console.log(newPath)
//It is a useful function bcoz different OS have different delimiters

