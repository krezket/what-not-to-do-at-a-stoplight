let questionIndex = 0;
let questions = [];
let choiceIndex = 0;
let timerId;
let timeInterval  = setInterval;
let timeLeft = 75;
const questionEl = document.getElementById("question")
const choicesEl = document.getElementById("choices")
const imageEl = document.getElementById("question-image")
const timerEl = document.getElementById("timer");
const feedback = document.getElementById("feedback")
const displayChoices = (choices)=>{
    choicesEl.innerHTML = ''
    choices.forEach(choice => {
        let choiceEl = document.createElement("div")
        choiceEl.innerHTML = choice.answer
        choiceEl.addEventListener("click",()=>{
            if(choice.isCorrect){
                choiceIndex ++
                console.log(choice.isCorrect);
                feedback.textContent = "You might be a good driver!!"
                timeLeft +=10
                
                //displayChoices(choiceIndex)
            } else{
               feedback.textContent = "you are definitely not a good driver!"
               timeLeft -=10;

               

              

            }
            //check if ans is correct
            // 
            //console.log(choice.isCorrect)
            questionIndex++ 
            displayQuestion(questionIndex)
        })
        choicesEl.appendChild(choiceEl)
        
    });

}
function countDown() {
  let timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time :" + timeLeft;
    console.log(timeLeft);

    if (timeLeft <= 0) {
      timeLeft = 0
      clearInterval(timeInterval);
      

           // // displayMessage();
    }
  }, 1000);
}
 
const displayQuestion = (questionToDisplay) => {
    let question = questions[questionToDisplay]
    console.log(question);
    questionEl.innerHTML = question.question
    displayChoices(question.Choices)
    imageEl.src = question.image
    countDown()
    
};

const getQuestions = async () => {
  await fetch("/api/quiz")
    .then((response) => response.json())
    .then((response) => {
      questions = response;
      displayQuestion(questionIndex);
    });

  console.log(questions);
  
};

getQuestions();



