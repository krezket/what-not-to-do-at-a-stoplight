const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../config/connection");

class Topic extends Model {}

Topic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "topic",
  }
);
 module.exports = Topic;