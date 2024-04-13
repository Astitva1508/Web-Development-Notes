const express = require('express')
const app=express()
const passport=require('passport')
require('./auth')
var session = require('express-session')

//Using this line of code adds a req.session object to all the routes req object
app.use(session({
   secret: 'somethingsecretgoeshere',
   resave: false,
   saveUninitialized: true,
   cookie:{}
}));

app.use(passport.initialize()) // init passport on every route call
app.use(passport.session())    //allow passport to use "express-session"
//adds the userInfo to the req.session object

const isLoggedIn=(req,res,next)=>{
    req.user?next():res.sendStatus(401)
}

//The function checkAuthenticated does the same task as isLoggedIn
//With passport we get access to the req.isAuthenticated
checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { console.log(req.user); return next() }
  res.sendStatus(401)
}

app.get('/',(req,res)=>{
    session=req.session
    session.userName='Astitva';
    res.send('<h1><a href="/auth/google">Sign In With Google</h1>')
})

app.get('/protected',checkAuthenticated,(req,res)=>{
    res.send(`This is the protected route\n.Hello ${req.user.displayName}`)
})

app.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}))

app.get('/google/callback',(req,res,next)=>{
    console.log('A');next()
},passport.authenticate('google',{
    successRedirect:'/protected',
    failureRedirect:'/auth/failure'
}))

app.get('/logout', (req, res) => {
  req.logout(()=>{console.log('sucesfully logged out')});
  console.log(req.session)
  res.send('GOodbye')
})


app.get('/auth/failure',(req,res)=>{
    res.send('Authentication Failed')
})

//scope defines what kind of information we are gonna retrieve about the user

app.listen(5000,()=>console.log('Server listening on port 5000'))



//Further Reading:
//https://medium.com/@prashantramnyc/how-to-implement-google-authentication-in-node-js-using-passport-js-9873f244b55e