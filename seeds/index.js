const sequelize = require('../config/connection')
const {Questions} = require('../models')

const questionsData = require('./questionsData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: false });
  
    await Questions.bulkCreate(questionsData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
  };
  
  seedDatabase();
  