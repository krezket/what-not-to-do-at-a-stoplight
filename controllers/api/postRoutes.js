const express = require('express');
const router = express.Router();
const {Post,Comment} = require('../../models')

router.post('/', async (req, res) => {
    try {
      const postData = await Post.create(req.body);
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

module.exports = router;