const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function onToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; // copying current value into new value
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", onToDoSubmit);
