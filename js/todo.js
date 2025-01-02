const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintTodo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span); // now "li" has "span" as child code
  span.innerText = newToDo;
  toDoList.appendChild(li); // can't delete and save at this momment
}

function onToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; // copying current value into new value
  toDoInput.value = "";
  paintTodo(newToDo);
}

toDoForm.addEventListener("submit", onToDoSubmit);
