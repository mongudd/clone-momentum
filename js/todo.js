const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";
let toDos = [];

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // copying current value into new value
  toDoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveTodo();
}
toDoForm.addEventListener("submit", onTodoSubmit);

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
  li.appendChild(button); // = make button to delete
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // object , arrary, whatever JS code -> String
  // by this code, duplicated value also can be saved
}

//Loading
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos); // String -> Array
  toDos = parsedTodos; // restoring prviouse elements
  parsedTodos.forEach(paintTodo);

  /*function sayHello(item) {
  console.log("this is the turn of", item);
}*/
  /* simplify
  parsedTodos.forEach((item) => console.log("this is the turn of ", item)); // = forEach : Array의 각 item에 대해 function을 실행 */
}
