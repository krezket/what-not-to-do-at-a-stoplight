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
      res.status(200).json(quizData);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/', async (req,res)=>{
    try{
        const quizData = await Questions.findAll({})

        const quiz = quizData.map(quiz=>quiz.get({ plain: true}))
        
        res.json(quiz)
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;