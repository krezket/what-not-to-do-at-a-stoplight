const express = require('express');
const router = express.Router();
const {Post,Topic} = require('../../models')


router.post('/', async (req, res) => {
    try {
      const topicData = await Topic.create({...req.body, user_id:req.session.user_id});
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

module.exports = router;