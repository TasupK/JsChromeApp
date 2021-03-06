const toDoForm=document.querySelector(".js-toDoForm")
    ,toDoInput=toDoForm.querySelector("input")
    ,toDoList=document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerHTML = "X";
    const newId = toDos.length + 1;
    li.innerText = text;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const todoObj = {
        text: text
        ,id = newId
    }
    toDos.push(todoObj);
    saveToDos();
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
          paintToDo(toDo.text);
        }
    } 

}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
