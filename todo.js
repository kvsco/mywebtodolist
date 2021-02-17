const time = document.querySelector(".jsTime");
const clock = time.querySelector("h1");
const toDoForm = document.querySelector(".jsToDo"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todolist");

const TODOS_LS = "toDos";
let toDos = [];

function deleteBtn(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDo();
}

function saveToDo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text){
    const li = document.createElement("li");
    const del = document.createElement("button");
    del.innerHTML = " ❌";
    del.addEventListener("click", deleteBtn);
    const span = document.createElement("span");
    const li_ID = toDos.length +1;
    span.innerHTML = text;
    li.appendChild(span);
    li.appendChild(del);
    li.id = li_ID;
    toDoList.appendChild(li);

    const todoObj ={
        text : text,
        id : li_ID
    };
    toDos.push(todoObj);
    saveToDo();
}

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clock.innerText = `${hours}:${minutes<10?`0${minutes}`:minutes}`;
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedTodos = JSON.parse(loadedToDos);
        
        parsedTodos.forEach(function(todo){
            paintToDo(todo.text)
        })
    }
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; 
}

function init(){
    getTime();
    setInterval(getTime, 1000);
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
