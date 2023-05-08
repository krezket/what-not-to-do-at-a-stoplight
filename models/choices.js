const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Choices extends Model {}

Choices.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    answers: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    correct: {
      type: DataTypes.BOOLEAN,
    },
    questions_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "questions",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "choices",
  }
);

module.exports = Choices;