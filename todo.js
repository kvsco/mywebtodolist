const time = document.querySelector(".jsTime");
const clock = time.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clock.innerText = `${hours}:${minutes<10?`0${minutes}`:minutes}`;
}


function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
