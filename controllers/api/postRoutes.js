const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models')

router.post('/', async (req, res) => {
  try {
    //   const topic = await Topic.findAll(req.body.id)
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
router.delete('/', async (req, res) => {
  try {
      const delPost = await Post.destroy({
          where: {
              id: req.body.id
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
//delete route
//update route
module.exports = router;