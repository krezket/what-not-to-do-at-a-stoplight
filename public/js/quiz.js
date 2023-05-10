let questionIndex = 0;
let questions = [];
//let choiceIndex = 0;
const questionEl = document.getElementById("question")
const choicesEl = document.getElementById("choices")
const imageEl = document.getElementById("question-image")
const displayChoices = (choices)=>{
    choicesEl.innerHTML = ''
    choices.forEach(choice => {
        let choiceEl = document.createElement("div")
        choiceEl.innerHTML = choice.answer
        choiceEl.addEventListener("click",()=>{
            // if(choice.isCorrect){
            //     choiceIndex ++
            //     displayChoices(choiceIndex)
            // }
            //check if ans is correct
            // 
            console.log(choice.isCorrect)
            questionIndex++ 
            displayQuestion(questionIndex)
        })
        choicesEl.appendChild(choiceEl)
        
    });

}
const displayQuestion = (questionToDisplay) => {
    let question = questions[questionToDisplay]
    console.log(question);
    questionEl.innerHTML = question.question
    displayChoices(question.Choices)
    imageEl.src = question.image
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

// function startQuiz(){
//     const theAnswer = true;
// }

// startQuiz();
