const router = require('express').Router();


const userRoutes = require('./userRoute');
const quizRoutes = require('./quizRoutes');
const postRoutes = require('./postRoutes');
const topicRoutes = require('./topicRoutes');

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/posts', postRoutes);
router.use('/topics', topicRoutes);

module.exports = router;
