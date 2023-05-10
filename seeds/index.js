const sequelize = require('../config/connection')
const {Questions} = require('../models')

const questionsData = require('./questionsData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Questions.bulkCreate(questionsData, {
      returning: true,
    });
  
    process.exit(0);
  };
  
  seedDatabase();
  