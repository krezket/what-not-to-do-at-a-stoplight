const express = require('express');
const router = express.Router();
const {Questions,Choices,Comment,Post,Topic} = require('../models')

router.get('/',(req,res)=>{
    res.render('home')
})


router.get('/login',(req,res)=>{
    res.render('login')
})


module.exports = router;