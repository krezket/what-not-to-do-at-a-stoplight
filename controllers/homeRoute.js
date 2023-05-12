const express = require("express");
const router = express.Router();
const { Questions, Comment, Post, Topic, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    if(!req.session.loggedIn){
        res.render("home", {
            userId: req.session.userId,
            loggedIn: req.session.loggedIn,
        });
    }
    else {
        const userData = await User.findByPk(req.session.userId, {
            attributes: { exclude: ['password'] },
        });
    
        const topicData = await Topic.findAll({
            include: [{
                model: User,
                attributes: ['username']
            }],
        })
    
        const user = userData.get({ plain: true });
        const topics = topicData.map(topic=>topic.get({plain:true}));
    
        res.render("home", {
            user,
            topics,
            userId: req.session.userId,
            loggedIn: req.session.loggedIn,
          });
    
    }

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

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    res.render("login");
  });

router.get("/post", (req, res) => {
  // check if req.session.userId
  res.render("post", {
    username: req.session.username,
    userId: req.session.userId,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/post/:id", async (req,res)=>{
    try {
        const topicData = await Topic.findByPk(req.params.id,{
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {model: Post},
        ],
    });

    const topic = topicData.get({plain:true});
    console.log(topic)

    res.render("singlePost", {
        ...topic,
        username: req.session.username,
        loggedIn: req.session.loggedIn,
    });
    }
    catch (err) {
    res.status(500).json(err);
    }

});

router.get("/profile", async (req,res)=>{

  try {
    const userData = await User.findByPk(req.session.userId,{
    include: [
        {
          model: Topic,
          attributes: ['title']
        },
        {
          model: Post
        },
    ],
});

const user = userData.get({plain:true});
console.log(user)

res.render("profile", {
    ...user,
    username: req.session.username,
    loggedIn: req.session.loggedIn,
});
}
catch (err) {
res.status(500).json(err);
}

    // User.findByPk(req.session.userId,{
    //     include: [{model:Topic, include:Post}]
    // }).then(user=>{
    //     let userData = user.get({plain:true})
    //     // console.log(userData);
    //     console.log(user.topics)
    //     console.log('========================')
    //     console.log(user.posts)
        
    //     let topics = user.topics.map(topic=>topic.get({plain:true}))
    //     console.log(topics);
    //     res.render("profile",{
    //         topics:topics, 
    //         user:userData,
    //     userId: req.session.userId,
    //   loggedIn: req.session.loggedIn})

    // })
})

module.exports = router;
