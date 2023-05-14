const express = require('express');
const router = express.Router();
const {Post,Topic} = require('../../models')


router.post('/', async (req, res) => {
    try {
      const topicData = await Topic.create({...req.body, user_id:req.session.userId,});
      res.status(200).json(topicData);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/', async (req,res)=>{
    try{
        const topicData = await Topic.findAll({
          include: Post,  
        })

        const topic = topicData.map(topic=>topic.get({ plain: true}))
        
        res.json(topic)
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
  console.log(req.body.id)
  try {
      const delPost = await Topic.destroy({
          where: {
              id: req.params.id
          },
      });
      if(!delPost) {
          return res.status(404).json({ msg: "Post does not exist in db" })
      }
      res.status(200).json(delPost);
  } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Error deleting", error })
  }
})

module.exports = router;