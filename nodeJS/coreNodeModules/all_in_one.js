const http=require("http");
const fs=require("fs")
const path=require("path")

const server = http.createServer((req,res)=>{
    //Test what the url is 
    if (req.url==="/"){
        fs.readFile(path.join(__dirname,"testFolder","index.html"),(err,content)=>{
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'})          
//This method is used to write to the headers
//first parameter is response status code
//second parameter is to adjust other properties
            res.write(content);
            res.end()
        })
    }
    //Serving HTML Files
    if (req.url==="/about"){
        fs.readFile(path.join(__dirname,"testFolder","about.html"),(err,content)=>{
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);
        })
    }
    //REST API's serve instead of JSON , so if we want to be like REST API's , then (ToDo's -> REST API)
    if (req.url==="/api/users"){
//What we normally do is fetch data from the database and that's what we are gonna imitate now 
        const users=[
            {name:"Astitva Dubey",age:19},
            {name:"Adamya Dubey",age:20},
        ]
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(users))
    }

//The above way of serving things is inefficient because for every single page that we want to serve , we want to write if (req.url===).We also need to handle CSS and images etc that we may want to include

    //To Make the File Path Dynamic
    //Build File Path
    let filePath=path.join(__dirname,'testFolder',req.url==='/'?"index.html":req.url)
    //filename makes the filepath dynammic. If user asks for /about.html , then we are gonna load that and so on.
    //console.log(filePath) also returns the favicon.ico and any affiliated css/js files with the HTML page

    //Getting the extension of the file to be loaded so that we can set the Content-Type
    let extname=path.extname(filePath);
    
    //Setting the initial contentType
    let contentType='text/html'

    //Check the extension and set the Content Type
    switch (extname){
        case '.js':
            contentType='text/javascript'
            break;
        case '.css':
            contentType='text/css'
            break;
        case '.json':
            contentType='application/json'
            break;
        case '.png':
            contentType='image/png'
            break;
        case '.jpg':
            contentType='image/jpg'
            break
    }    
    fs.readFile(filePath,(err,content)=>{
        if (err){
//If we want to check for specific types of errors , errors will have a property called code 
            if (err.code=='ENOENT'){
                //Page not Found Error 
                fs.readFile(path.join(__dirname,'testFolder','404.html'),(error,data)=>{
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.end(data,'utf8');
                })
            }
            else{
                //Most likely a server error (some 500 range)
                res.writeHead(500)
                res.end(`Server Error : ${error.code}`)
            }
        }
        else{
            res.writeHead(200,{'Content-Type':contentType})
            res.end(content)
        }
    })
})


// ToDo's -> Deployment to Heroku






//server listens on the port decided by the host (stored in the environment variable)
const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})


//Code written inside .createServer runs for all the routes of the PORT . 
//ToDo's ->1. code written inside res.end is treated only as HTML if it is preceded by a res.write() or its content type is set to text/hmtl
//         2. what are headers ?
//         3. error objects
//Serving the right status code and content-Type , in other words learning about HTTP is a must

