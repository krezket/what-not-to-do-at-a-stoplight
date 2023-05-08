const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class questions extends Model {}

questions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "questions",
  }
);

  module.exports = questions;