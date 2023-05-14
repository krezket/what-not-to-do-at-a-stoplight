const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Questions = require("./questions");
const Topic = require("./topic");
const Choice = require("./choice")

User.hasMany(Topic,{
    foreignKey: 'user_id'
});
Topic.belongsTo(User,{
    foreignKey: 'user_id'
});
// Post.belongsTo(User,{
//     through: Topic,
//     foreignKey: 'user_id'
// })

Topic.hasMany(Post,{
    foreignKey: 'topic_id'
});
Post.belongsTo(Topic,{
    foreignKey: 'topic_id'
});

User.hasMany(Post,{
    foreignKey: 'user_id'
});

Post.belongsTo(User,{
    foreignKey: 'user_id'
});

Topic.hasMany(Comment,{
    foreignKey: 'topic_id'
});

Comment.belongsTo(Topic ,{
    foreignKey: 'topic_id'
});

Questions.hasMany(Choice,{
    foreignKey: 'question_id'
})
Choice.belongsTo(Questions,{
    foreignKey: 'question_id'
})

module.exports = {User,Post,Comment,Questions,Topic,Choice}