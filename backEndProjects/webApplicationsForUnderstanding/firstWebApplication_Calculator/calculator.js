const express= require("express") ;
const app = express();


//express.text() is used to parse the incoming request payloads into a string
//express.json() is used to (baad me)
//express.urlencoded() is used to parse data that comes from HTML form.{extended:true} allows us to post nested objects
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
})

app.post("/bmicalculator",function(req,res){
    var weight =req.body.weight ;
    var height =req.body.height ;
    var bmi= weight/(Math.pow(height,2));
    res.send("The BMI of the user is "+bmi);
})



app.post("/",function(req,res){
    console.log(req.body); //Iska access tabhi milega jab line 8 likhi hogi
    // console.log(req);
    var num1=req.body.num1;
    var num2=req.body.num2;
    var result =eval(num1)+eval(num2);
    res.send("<h1>"+result+"</h1>");
})


app.listen(3000,function(){
    console.log("Server connected to port:3000");
});

