const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models')

router.post('/', async (req, res) => {
  try {
      // const topic = await Topic.findAll(req.body.id)
      console.log(req.body)
      const postData = await Post.create({...req.body, user_id:req.session.userId, username:req.session.username});
      res.status(200).json(postData);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/', async (req,res)=>{
    try{
        const postData = await Post.findAll({
          include: Comment 
        })

        const post = postData.map(post=>post.get({ plain: true}))
        
        res.json(post)
    }
    catch(err){
        res.status(500).json(err);
    }
});
//delete route
//update route
module.exports = router;