const jwt = require('jsonwebtoken')

const token = jwt.sign({name:'Astitva Dubey'},'secret')
console.log(token)

const payload = jwt.verify(token,'secret')
console.log(payload)
