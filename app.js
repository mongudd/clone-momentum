/* 
const loginForm = document.getElementById("login-form");*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
/* simplify
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button"); */

// link의 기본 동작 : 클릭시 다른 페이지로 이동 //
// 해당 기본 동작 막아보기! //
const link = loginForm.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  // alert("Click!");
  // alert = 기본 동작을 막을 수 있음. 단, 확인 버튼을 누르기 전 까지만 유효.
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
