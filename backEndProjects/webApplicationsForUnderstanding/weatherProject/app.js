const express=require("express");
const app =express();

const https=require("https");
// app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    https.get("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=0071ae51180b61b8d1611be7ffeff083&units=metric",function(response){
        response.on("data",function(d){
//This method corresponds to the actual message body that we got back by making the api request
//Inside the on method , we tap onto a specific moment e.g when we recieve some data
//first parameter - "data" taps into data that we recieved and then we run a callback function
            let weatherData=JSON.parse(d);//returns a JS object 
            console.log(weatherData);
//The above method returns the data recieved in the hexadecimal format into JS Object
            let temp_in_Delhi=weatherData.main.temp;
            res.write(`<p>The weather condition in New Delhi as of now is ${weatherData.weather[0].description}</p>`)
            res.write('<h1>The temparture in New Delhi as of now is ' + temp_in_Delhi+"</h1>");
            res.write(`<img src=http://openweathermap.org/img/wn/50n@2x.png>`)
            res.send()
        });
    })
    // res.send();
})

app.listen(3000,function(){
    console.log("Server is running on port:3000")
})