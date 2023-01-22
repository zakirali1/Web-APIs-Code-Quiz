
const timer = document.querySelector("#time");
const start = document.querySelector("#start");
const start_screen = document.querySelector("#start-screen")
const questions = document.querySelector('#questions');
const titles = document.querySelector('#question-title');
const choices = document.querySelector('#choices');
const end = document.querySelector('#end-screen');
const initials = document.querySelector("#initials");
const submit = document.querySelector('#submit');
const finalScore = document.querySelector('#final-score'); 


let results = [];

const display = [
    {
       titles: "Arrays in Javascript can be used to store _____.",
       answers: ["variables", "Numbers", "Booleans", "All of the above"],
       correct: "All of the above"
    },
    {
    titles: "The If/else statement is enclosed within ______.",
       answers: ["Curly braces", "Period", "Square brackets", "none of the above"],
       correct: "Curly braces"
    },
   
    {
          titles: "Functions are useful for__________.",
          answers: ["Repeatable code", "Creating an array", "Creating a string", "none of the above"],
          correct: "Repeatable code"
       },
   
   ];

let clock = 50;
let index = 0;

const init = event => {
event.preventDefault();
start_screen.setAttribute("class", "hide")

getQuestions();

    let timeout = setInterval(() => {
        
    clock--;
    timer.textContent = clock;
    

        if(clock === 0 || display[index] === undefined) {
            clearInterval(timeout)
            questions.setAttribute("class", "hide");
            end.setAttribute("class", "active")
            localStorage.setItem("clock", JSON.stringify(clock));
            finalScore.textContent = JSON.parse(localStorage.getItem("clock"));

            submit.addEventListener("click", highscore)
        }
    },1000)
    

};

const highscore = event => {
    event.preventDefault();
    location.href = "./highscores.html"

    let username = initials.value
    localStorage.setItem("initials", JSON.stringify(username))

};


const getQuestions = () => {
    
    questions.setAttribute("class", "active");
    if(index === 0) {
    titles.textContent = display[0].titles;

    for(let i = 0; i < display[index].answers.length; i++) {
        console.log(display[index].answers[i]);

        let ordered = document.createElement('ol');
     choices.appendChild(ordered);

     let buttons = document.createElement('button');
     ordered.appendChild(buttons);
     

     buttons.textContent = display[index].answers[i];

     buttons.addEventListener("click", checker);
} 

console.log(index)

}

 
else {

    titles.textContent = display[index].titles;
    
    choices.innerHTML = "";
    for(let i = 0; i < display[index].answers.length; i++) {
        console.log(display[index].answers[i]);

        let ordered = document.createElement('ol');
     choices.appendChild(ordered);

     let buttons = document.createElement('button');
     ordered.appendChild(buttons);

     buttons.textContent = display[index].answers[i];

     buttons.addEventListener("click", checker);
     
}
 
// index++
console.log(index);
    };   
};

const checker = event => {
    
    event.preventDefault()
    let element = event.currentTarget
    const correct = "Correct!";
    const wrong = "Wrong!";
   

    if(element.textContent !==  display[index].correct) {
        choices.insertAdjacentHTML("afterend", `<hr>${wrong}</hr>`);
        results.push(wrong);
        clock -= 15
    

    } else {
        choices.insertAdjacentHTML("afterend", `<hr>${correct}</hr>`)
        results.push(correct);
        
    }
    
    index++
    getQuestions();
}


start.addEventListener("click", init);