const highscore = document.querySelector("#highscores");
const clear = document.querySelector("#clear");

let listItem = document.createElement("li");

const getScore = () => {
   
let userN = JSON.parse(localStorage.getItem("initials"));

let clock = JSON.parse(localStorage.getItem("clock"))


highscore.appendChild(listItem);
listItem.textContent = userN + " - " + clock;

clear.addEventListener("click", buttonclear)


};

const buttonclear = () => {

    listItem.setAttribute("class", "hide"); 

};

getScore();

