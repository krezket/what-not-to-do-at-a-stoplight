const router = require("express").Router();

const userRoutes = require("./userRoute");
const quizRoutes = require("./quizRoutes");
const postRoutes = require("./postRoutes");
const topicRoutes = require("./topicRoutes");
const commentRoutes = require("./commentRoutes");
const emailRoutes = require("./emailRoutes");

router.use("/users", userRoutes);
router.use("/quiz", quizRoutes);
router.use("/posts", postRoutes);
router.use("/topics", topicRoutes);
router.use("/comments", commentRoutes);
router.use("/email", emailRoutes);

module.exports = router;
