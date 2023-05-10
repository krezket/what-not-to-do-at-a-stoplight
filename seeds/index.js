const sequelize = require('../config/connection')
const {Questions ,Choice, Post, Topic, User} = require('../models')

const questionsData = require('./questionsData.json')
const choicesData = require('./choiceData.json')
const topicData = require('./topicData.json')
const postData = require('./postData.json')
const userData = require('./userData.json')
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await User.bulkCreate(userData, {
      returning: true,
    });
    await Questions.bulkCreate(questionsData, {
      returning: true,
    });
    await Choice.bulkCreate(choicesData, {
      returning: true,
    });
    await Topic.bulkCreate(topicData, {
      returning: true,
    });
    await Post.bulkCreate(postData, {
      returning: true,
    });
  
    process.exit(0);
  };
  
seedDatabase();
  