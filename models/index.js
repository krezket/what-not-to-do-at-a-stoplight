const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Choices = require("./choices");
const Questions = require("./questions");
const Topic = require("./topic");
const questions = require("./questions");

User.hasMany(Post,{
    foreignKey: 'user_id'
});

Post.belongsTo(User,{
    foreignKey: 'user_id'
});

Comment.belongsTo(Post,{
    foreignKey: 'post_id'
});
Post.hasMany(Comment,{
    foreignKey: 'post_id'
});
Choices.belongsTo(Questions,{
    foreignKey: 'questions_id'
})
questions.hasMany(Choices,{
    foreignKey: 'questions_id'
})
Topic.belongsTo(Post,{
    foreignKey: 'post_id'
})
Post.hasMany(Topic,{
    foreignKey: 'post_id'
})