const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Questions extends Model {}

Questions.init(
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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // answers: {
    //   type: DataTypes.JSON,
    //   allowNull: false
    // }
  },
  {
    sequelize,
    modelName: "questions",
    freezeTableName: true
  }
);

  module.exports = Questions;