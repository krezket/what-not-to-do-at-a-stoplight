const express = require("express");
const router = express.Router();
const { Questions, Comment, Post, Topic, User } = require("../models");

router.get("/", (req, res) => {
  res.render("home", {
    userId: req.session.userId,
    loggedIn: req.session.loggedIn,
  });
});

// router.get("/login", async (req, res) => {
//   res.render("login");
// });
// router.get('/logout',(req,res)=>{
//     res.render('home', {
//         loggedIn: req.session.loggedIn,
//       })
// })

router.get("/quiz", (req, res) => {
  res.render("quiz", {
    userId: req.session.userId,
    loggedIn: req.session.loggedIn,
  });
});
router.get("/post", (req, res) => {
  // check if req.session.userId
  res.render("post", {
    userId: req.session.userId,
    loggedIn: req.session.loggedIn,
  });
});
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
router.get("/profile",(req,res)=>{
    res.render("profile",{
    userId: req.session.userId,
  loggedIn: req.session.loggedIn})
})

<<<<<<< HEAD
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
=======
module.exports = router;
>>>>>>> dev
