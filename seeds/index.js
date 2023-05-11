const sequelize = require('../config/connection')
const {Questions ,Choice, Post, Topic, User, Comment} = require('../models')

// const userData = require('./userData.json')
// const topicData = require('./topicData.json')
// const postData = require('./postData.json')
// const commentData = require('./commentData.json')
const questionsData = require('./questionsData.json')
const choicesData = require('./choiceData.json')
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    // await User.bulkCreate(userData, {
    //   returning: true,
    // });
    // await Topic.bulkCreate(topicData, {
    //   returning: true,
    // });
    // await Comment.bulkCreate(commentData, {
    //   returning: true,
    // });
    // await Post.bulkCreate(postData, {
    //   returning: true,
    // });
    await Questions.bulkCreate(questionsData, {
      returning: true,
    });
    await Choice.bulkCreate(choicesData, {
      returning: true,
    });
  
    process.exit(0);
  };
  
seedDatabase();
  