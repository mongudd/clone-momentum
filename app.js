const h1 = document.querySelector("div.hello:first-child h1");

// existing class name is changing by JS
// sexy-font -> clicked
/*function handleh1Click() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
} */

// To maintain existing class name === className -> classList
// sexy-font + clicked
/*function handleh1Click() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
} */

// To shorten === classList.contains.remove.add -> toggle
// sexy-font + clicked
function handleh1Click() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleh1Click);
