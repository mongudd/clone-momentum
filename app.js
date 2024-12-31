/* 
const loginForm = document.getElementById("login-form");*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
/* simplify
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button"); */

// 유저 기억하기!
// form 제출 + 기본 동작 막기 -> form 숨기기 -> value 저장 -> value h1에 입력 -> h1 보이게하기
// value를 localstorage에 저장하여 기억
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("Username", username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
