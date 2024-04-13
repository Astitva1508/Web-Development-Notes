const express= require('express')
const app =express()

const ejs = require('ejs')
let  homeItems = ['Exercise and Stretch' , 'Reading Book']
let workItems = []
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
//Must do to render template files in ejs format
//We also need to have a views folder where all our html files are stored with a .ejs extension
//Whatever is HTML is EJS

const today = new Date()
var options = {
    weekday:'long',
    day:'numeric',
    month:'long'
}
const todayFormatted = today.toLocaleDateString('en-US',options)

// app.get('/',(req,res)=>{
//     if (today.getDate() in [0,6]) var kindOfDay = 'WeekEnd'
//     else var kindOfDay = 'WeekDay'
//     res.render('index',{day:kindOfDay})
//This is the way to render template files
//The variable named day in the ejs file will be replaced by the kindOfDay variable in the app.js file
// })

app.get('/',(req,res)=>{
    res.render('index',{todayFormatted:todayFormatted,items:homeItems,list:'/'})
})

app.get('/work',(req,res)=>{
    res.render('index',{list:'work',todayFormatted:todayFormatted,items:workItems})
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.post('/',(req,res)=>{
    const buttonName = req.body.list
    if (buttonName==='/'){
        homeItems.push(req.body.newItem)
        res.redirect('/')
    }
    if (buttonName==='work'){
        workItems.push(req.body.newItem)
        res.redirect('/work')
    }
})


app.listen(3000,()=>{
    console.log('Theek se connect ho gaye hain server se')
})



//What we learnt to do with EJS
// 1.Sending the value of variables into the html file using <%= %> tags
// 2.Adding JS to the html file using <% %> tags
// 3.Passing data from the server to the template
// 4.Serving Functionality for multiple pages(that only differ slightly)using the same EJS file.For this we need some information from our POST request(here we provide the info using our button element)
// 5.Creating layouts using EJS(Layouts can be implemented by including headers and footers)