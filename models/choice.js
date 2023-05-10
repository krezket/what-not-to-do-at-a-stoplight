const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Choice extends Model {}

Choice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    
    
    question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "questions",
          key: "id",
        },
      },
    
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isCorrect : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  },
  {
    sequelize,
    modelName: "Choice",
    freezeTableName: true
  }
);

  module.exports = Choice;