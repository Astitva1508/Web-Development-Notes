const express=require('express');
const app=express();

const path =require('path');
const https=require('https');
const { fstat } = require('fs');

const PORT=process.env.PORT||3000;

app.use(express.urlencoded({extended:true})) ;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/',(req,res)=>{
    const d = req.body.city ;
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${d}&units=metric&appid=0071ae51180b61b8d1611be7ffeff083`,(rs)=>{
        rs.on('data',(data)=>{
            d1=JSON.parse(data);
            if (d1.cod == 404){
                res.write('<h1>The above city data cannot be extracted</h1>');
                res.write('Try out any other city');
                res.end()
            }else{
                res.write(`<h1>The weather information for ${d} is as follows:`)
                res.write(`<p>Temparature : ${d1.main.temp} </p>`)
                res.write(`<image src=https://openweathermap.org/img/wn/${d1.weather[0].icon}@2x.png>`)
                res.end()
            }
        })
    }) ;
})

app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`));