const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleh1Click() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

//If use in this way, can removeEventLister later
h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

//h1.onclick = handleh1Click;
//h1.onmouseenter = handleMouseEnter;
//h1.onmouseleave = handleMouseLeave;

function handelWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handelWindowCopy() {
  alert("Copier!");
}

function handelWindowOffline() {
  alert("SOS no Wifi");
}

function handelWindowOnline() {
  alert("ALL GOOD!");
}

window.addEventListener("resize", handelWindowResize);
window.addEventListener("copy", handelWindowCopy);
window.addEventListener("offline", handelWindowOffline);
window.addEventListener("online", handelWindowOnline);
