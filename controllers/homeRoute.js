const express = require("express");
const router = express.Router();
const { Questions, Comment, Post, Topic, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.render("home", {
        userId: req.session.userId,
        loggedIn: req.session.loggedIn,
      });
    } else {
      const userData = await User.findByPk(req.session.userId, {
        attributes: { exclude: ["password"] },
      });

      const topicData = await Topic.findAll({
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });

      const user = userData.get({ plain: true });
      const topics = topicData.map((topic) => topic.get({ plain: true }));

      res.render("home", {
        user,
        topics,
        userId: req.session.userId,
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

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
  res.render("post", {
    username: req.session.username,
    userId: req.session.userId,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/post/:id", async (req, res) => {
  try {
    const topicData = await Topic.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        { model: Comment },
        { model: Post },
      ],
    });

    const topic = topicData.get({ plain: true });
    console.log(topic);

    res.render("singlePost", {
      ...topic,
      username: req.session.username,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      include: [
        {
          model: Topic,
        },
        {
          model: Post,
          attributes: ["notes"],
        },
      ],
    });

    const users = userData.get({ plain: true });
    console.log(users);

    res.render("profile", {
      ...users,

      username: req.session.username,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
