const express=require('express');
const router=express.Router()

const {getAllFiles,getAllFilesStatic} = require('../controllers/products')

router.get('/',getAllFiles);

router.get('/static',getAllFilesStatic);

module.exports= router;