const express = require('express')
const app = express()
const {login,dashboard}= require('../controllers/main')
const router = express.Router()
const authenticationMiddleware=require('../middleware/auth')
router.route('/login').post(login)

router.route('/dashboard').get(authenticationMiddleware,dashboard)


module.exports=router