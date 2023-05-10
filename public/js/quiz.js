const titleEl = document.querySelector('#title');
const imageEl = document.querySelector('#image');
const questionEl = document.querySelector('#question');
const answersEl = document.querySelector('#answers');

let randomQuiz = ""

fetch('/api/quiz')
.then(response=> response.json())
.then(response=> showResults(response));

const copyQuiz = [];
function showResults(results){
    for (let i=0; i < results.length; i++){
        copyQuiz.push(results[i]);
    };
    startQuiz();
};


function startQuiz(){
    const theAnswer = true;
    console.log(copyQuiz)

    // let randomQuizIndex = Math.floor(Math.random() * copyQuiz.length);
    // randomQuiz = copyQuiz[randomQuizIndex];
    // copyQuiz.splice(randomQuizIndex, 1);

    titleEl.textContent = copyQuiz[0].title;

    let img = document.createElement("img");
    img.setAttribute("src", copyQuiz[0].image);
    img.setAttribute("style", "width: 400px;");
    imageEl.appendChild(img);

    questionEl.textContent = copyQuiz[0].question;

    let q1 = document.createElement("button");
    q1.textContent = copyQuiz[0].answers[0].a;
    answersEl.appendChild(q1);

    let q2 = document.createElement("button");
    q2.textContent = copyQuiz[0].answers[1].b;
    answersEl.appendChild(q2);



}
