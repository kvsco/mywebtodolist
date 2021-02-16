const form = document.querySelector(".jsForm"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    body = document.querySelector("body");

const LS_USER = "currentUser";
const CN_SHOWING = "showing";
const IMG_NUM = 11;

function saveName(text){
    localStorage.setItem(LS_USER, text);
}
function paintGreeting(text){
    const num = Math.floor( Math.random() * 10);
    form.classList.remove(CN_SHOWING);
    greeting.classList.add(CN_SHOWING);
    switch(num){
        case 0: greeting.innerText =`Be true to yourself ,${text}`;
        break;
        case 1: greeting.innerText =`Life is a choice ,${text}`;
        break;
        case 2: greeting.innerText =`Follow your own star ,${text}`;
        break;
        case 3: greeting.innerText =`Live life to the fullest ,${text}`;
        break;
        case 4: greeting.innerText =`Never stop believing ,${text}`;
        break;
        case 5: greeting.innerText =`Count your blessings ,${text}`;
        break;
        case 6: greeting.innerText =`Love conquers all ,${text}`;
        break;
        case 7: greeting.innerText =`Attitude is everything ,${text}`;
        break;
        case 8: greeting.innerText =`Don't sweat the small stuff ,${text}`;
        break;
        case 9: greeting.innerText =`Don't dream it, be it ,${text}`;
        break;
    }
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
function paintImage(imgNum){
    const image = new Image();
    image.src = `images/${imgNum}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image);

}

function getRandom(){
    const number = Math.floor( Math.random() * IMG_NUM);
    return number;
}

function init(){
    loadName();
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();