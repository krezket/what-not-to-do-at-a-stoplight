const router = require("express").Router();
const { User, Topic } = require("../../models");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: Topic,
    });

    const user = userData.map((user) => user.get({ plain: true }));

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.userId = newUserData.id;
    req.session.username = newUserData.username;
    req.session.loggedIn = true;
    res.status(200).json(newUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/session", async (req, res) => {
  res.json(req.session);
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      console.log("no user with this username!");
      res.status(403).json({ msg: "No user with this username" });
    } else {
      if (bcrypt.compareSync(req.body.password, userData.password)) {
        req.session.userId = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
        res.status(200).json(userData);
      } else {
        res.status(403).json({ msg: "wrong password " });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy();
    res.status(200).json({ msg: "logged out done" });
  } else {
    res.status(404).json({ msg: "you're not logged in" });
  }
});

module.exports = router;
