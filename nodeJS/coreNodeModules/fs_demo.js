const fs= require("fs");
const path=require("path")

//Most of the fileSystem module functions come with both synchronous and asynchronous formats(by Default)

//mkdir -> create folder 

// fs.mkdir(path.join(__dirname,"tests"),{},err=>{
//     if (err) throw err ; 
//     console.log("Mera Bharat Mahaan")
// });

//creates a new folder named test inside the current directory
//First parameter -> path of the new folder (including folder name)
//Second parameter -> options
//Third parameter -> callback with error object as parameter

//open -> create a file
//write -> create  a file and write to it straightaway
fs.writeFile(path.join(__dirname,"tests","test.txt"),"Hello World",err=>{
    if (err) throw err;
    console.log("File created successfully")
})
//First Parameter -> filename 
//Second Parameter -> content that you want to write
//Third parameter -> callback with error object as parameter
//Every instance of writeFile overwrites the previous content

fs.appendFile(path.join(__dirname,"tests","test.txt")," I am in love with the shape of You",err=>{
    if (err) throw err;
    console.log("Content appended to file successfully")
})

//read File
fs.readFile(path.join(__dirname,"tests","test.txt"),"utf-8",function(err,data){
    if (err) console.log(err);
    console.log(data);
})

//rename file
fs.rename(path.join(__dirname,"tests","test.txt"),path.join(__dirname,"tests",test1.txt),function(err){
    if (err) console.log(err);
})
//Second parameter is the full name of the file that you want
//In order to rename the file , the __dirname of the older and newer file must be same and only the file name should vary
//if that's not the case , then new file with second path created and its content same as that of the first file

