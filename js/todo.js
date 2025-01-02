const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  // append should be placed at the end
  li.appendChild(span); // = "li" has "span" as child code
  toDoList.appendChild(li); // = with only this, can't delete and save
  li.appendChild(button); // make button to delete
}

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // copying current value into new value
  toDoInput.value = "";
  paintTodo(newTodo);
}

toDoForm.addEventListener("submit", onTodoSubmit);
