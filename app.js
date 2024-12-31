/* 
const loginForm = document.getElementById("login-form");*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
/* simplify
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button"); */

function onBtnClick() {
  console.log("Hello", loginInput.value); // value가 없어도 Hello는 출력됨
}

loginBtn.addEventListener("click", onBtnClick);
