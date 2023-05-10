const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Questions = require("./questions");
const Topic = require("./topic");
const Choice = require("./choice")


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
Topic.belongsTo(Post,{
    foreignKey: 'post_id'
})
Post.hasMany(Topic,{
    foreignKey: 'post_id'
})
Questions.hasMany(Choice,{
    foreignKey: 'question_id'
})
Choice.belongsTo(Questions,{
    foreignKey: 'question_id'
})

module.exports = {User,Post,Comment,Questions,Topic,Choice}