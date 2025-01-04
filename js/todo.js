const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";
let toDos = [];

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // copying current value into new value
  toDoInput.value = "";
  const newTodoObj = {
    // assigning randome IDs to elements
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}
toDoForm.addEventListener("submit", onTodoSubmit);

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  // append should be placed at the end
  li.appendChild(span); // = "li" has "span" as child code
  toDoList.appendChild(li); // = with only this, can't delete and save
  li.appendChild(button); // = make button to delete
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // parseInt : String -> Number
  saveTodo(); // to update
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

// Delete from Local stroage, where copy todos array
// Assign random IDs to each elements = Date.now()

// Create new array excluding element that want to delete = .filter
// if return true, will keep that element
// if return false, will not keep that element anymore

/* Filter Practice
function Filter() {
  return true;
}
[1, 2, 3, 4].filter(Filter); // [1,2,3,4]

function Filter() {
  return false;
}
[1, 2, 3, 4].filter(Filter); // []

function Filter(item) {
  return item !== 3;
}
[1, 2, 3, 4].filter(Filter); // [1,2,4]
/Logic:
1 !== 3 -> true
2 !== 3 -> true
3 !== 3 -> false
4 !== 3 -> true
/

function Filter(item) {
  return item <= 1000;
}
[1234, 5454, 223, 122, 45, 6775, 344].filter(Filter); // [223, 122, 45, 344] 
*/
/* Filter -> Create New Array
const arr = [1, 2, 3, 4];
arr.filter((item) => item > 2);
const newArr = arr.filter((item) => item > 2);
console.log(arr); // [1, 2, 3, 4]
console.log(newArr); // [3, 4]
*/
