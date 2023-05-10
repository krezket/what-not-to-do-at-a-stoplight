fetch('/api/quiz')
.then(response=> response.json())
.then(response=> showResults(response));

function showResults(results){
    console.log(results)
}

// function startQuiz(){
//     const theAnswer = true;
// }

// startQuiz();