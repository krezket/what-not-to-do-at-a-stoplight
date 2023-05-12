const express = require("express");
const router = express.Router();
const { Questions, Comment, Post, Topic, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const topicData = await Topic.findAll({
        include: [{
            model: User,
            attributes: ['username']
        }],
    })
    const topics = topicData.map(topic=>topic.get({plain:true}));

    res.render("home", {
        topics,
        userId: req.session.userId,
        loggedIn: req.session.loggedIn,
      });
  }
  catch (err) {
    res.status(500).json(err);
  }
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

module.exports = router;
