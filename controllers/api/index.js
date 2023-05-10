const router = require('express').Router();


const userRoutes = require('./userRoute');
const quizRoutes = require('./quizRoutes')

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes)

module.exports = router;
