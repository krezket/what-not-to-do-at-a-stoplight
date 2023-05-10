const sequelize = require('../config/connection')
const {Questions ,Choice} = require('../models')

const questionsData = require('./questionsData.json')
const choicesData = require('./choiceData.json')
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Questions.bulkCreate(questionsData, {
      returning: true,
    });
    await Choice.bulkCreate(choicesData, {
      returning: true,
    });
  
    process.exit(0);
  };
  
  seedDatabase();
  