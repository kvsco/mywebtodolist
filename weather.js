const COORDS = 'coords';
const API_KEY = "32f1d9df409cf63c8613af62bf526216";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=matric`).then(function(json){
        return json.json();
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        const weath = json.weather[0].main;
        weather.innerText = `${temp} @ ${place} is ${weath}`;
    });
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
function handleSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleError(){
    console.log("error");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleSucces, handleError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        //get WEATHER
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();