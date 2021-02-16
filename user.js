const form = document.querySelector(".jsForm"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const LS_USER = "currentUser";
const CN_SHOWING = "showing";

function saveName(text){
    localStorage.setItem(LS_USER, text);
}
function paintGreeting(text){
    form.classList.remove(CN_SHOWING);
    greeting.classList.add(CN_SHOWING);
    greeting.innerText =`Hello ${text}`;
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(CN_SHOWING);
    form.addEventListener("submit",handleSubmit);
}
function loadName(){
    const currentUser = localStorage.getItem(LS_USER);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}
init();