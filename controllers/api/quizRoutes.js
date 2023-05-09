const router = require('express').Router();
const { Questions } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const quizData = await Questions.create({
        title: req.body.title,
        image: req.body.image,
        question: req.body.question,
        answers: req.body.answers,
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
module.exports = router;