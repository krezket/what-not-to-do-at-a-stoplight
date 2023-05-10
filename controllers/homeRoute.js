const express = require('express');
const router = express.Router();
const {Questions,Comment,Post,Topic} = require('../models')

router.get('/',(req,res)=>{
    res.render('home')
})


router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/quiz',(req,res)=>{
    res.render('quiz')
})


module.exports = router;