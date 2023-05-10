const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "topics",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "post",
    freezeTableName: true
  }
);

module.exports = Post;
