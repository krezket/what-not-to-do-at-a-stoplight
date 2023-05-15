const router = require("express").Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const { Model } = require("sequelize");
const { Topic, User } = require("../../models");




const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail', 
  auth: {
    user: 'sixgroup73@gmail.com', 
    // pass: 'Passwordsix123$' 
    pass: 'xgxloscoqiugseou' 
  }
}));




// Send email to post creator when a new comment is made
const sendEmailToPostCreator = (postCreatorEmail, postSubject,postMessage) => {
  
  const mailOptions = {
    from: 'traffic-quiz@gmail.com', 
    to: postCreatorEmail,
    subject: postSubject,

    // subject: ' There is a New comment on your post',
    text:postMessage
    // text: 'Hi, \n\nSomeone has commented on your post. \n\nBest regards, \nYour website team'
  };

  // Send email using nodemailer transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("email error ",error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
  

router.post('/' , async (req,res)=>{
  sendEmailToPostCreator(req.body.to,req.body.subject,req.body.message)
  res.send("succesfully sent")

})
router.post('/:topic_id',async (req,res)=>{
  console.log("testing topics",req.params.topic_id);
  const topicData = await Topic.findByPk(req.params.topic_id,{include: [{model: User}]})
  let topic = topicData.get({plain:true})
  console.log(topic.user);
  sendEmailToPostCreator(topic.user.email,"There is a New comment on your post"," Hi, \n\nSomeone has commented on your post. \n\nBest regards, \nYour website team")
})
// listenForNewComments();
// sendEmailToPostCreator('linotmike.mk@gmail.com');

module.exports = router