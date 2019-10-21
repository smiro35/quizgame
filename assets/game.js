//  Let's put together some variables that we will need

var startButton = document.querySelector("#go");

var questionContainerEl = document.getElementById("questionsContainer");

var questionEl = document.getElementById("question");

var answerButtonsEl = document.getElementById("choices");

var choiceEl = document.getElementsByClassName("btn btn-secondary btn-lg btn-block");

var score = 0;




// var shuffledQuestion, currentQuestion;





//  here is an object of all out 3 questions, choices and answers

let questions = [

    {
        question: "Commonly used data types DO NOT include:",
        choicesA: "strings",
        ChoiceB: "booleans",
        ChoiceC: "alerts",
        correct: "c"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choicesA: "quotes",
        ChoiceB: "curly brackets",
        ChoiceC: "parentheses",

        correct: "C"
    },
    {
        question: "Best donut shop in the world____.",

        ChoiceA: "Krispy Kreme",
        ChoiceB: "My mom",
        ChoiceC: "Not your mom",
        correct: "c"

    }
];


function startGame() {



    console.log("starting");

    //  here we want to hide the start button and reveal the questions
    startButton.classList.add("hide");
    questionContainerEl.classList.remove("hide");


};


// Now let's create an event for the start button and what it needs to do when clicked.
startButton.addEventListener("click", startGame);



// Now lets create some variables and function for the questions

var lastQuestionIndex = questions.length - 1;

var runningQuestionIndex = 0;

function renderQuestion() {

    q = questions[runningQuestionIndex];

    question.innerHtml = "<p>" + q.question + "</p>";

    $("#A").innerHtml = q.ChoiceA;
    $("#B").innerHtml = q.ChoiceB;
    $("#C").innerHtml = q.ChoiceC;

    runningQuestionIndex = 0;

    renderQuestion();




}


// We need a function and click event for the answer buttons here


function answerbtn() {

    $("#A").innerHtml = q.ChoiceA;
    $("#B").innerHtml = q.ChoiceB;
    $("#C").innerHtml = q.ChoiceC;


}

answerButtonsEl.on("click", function() {

    runningQuestionIndex++;
});