const express = require('express');
const router = express.Router();
const {Questions,Comment,Post,Topic} = require('../models')

router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/login', async(req,res)=>{
    res.render('login')
})

router.get('/logout',(req,res)=>{
    res.render('home', {
        loggedIn: req.session.loggedIn,
      })
})

router.get('/quiz',(req,res)=>{
    res.render('quiz')
})

router.get('/post', (req,res)=>{
    res.render('post')
})
// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
//     res.render('login');
//   });

module.exports = router;