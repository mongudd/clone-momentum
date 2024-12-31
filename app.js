/* 
const loginForm = document.getElementById("login-form");*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
/* simplify
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button"); */

// 유저 정보 유무에 따라 로딩하기!
// form 제출 + 기본 동작 막기 -> form 숨기기 -> value 저장 -> value h1에 입력 -> h1 보이게하기
// value를 localstorage에 저장하여 기억
// localstorage에 value 있다면 로그인 폼 x, greeting 폼 o
// localstorage에 value 없다면 로그인 폼 o

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로
const USERNAME_KEY = "Username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username) {
  // 이 username은 위에서 선언된 username과는 별개. tomato로 설정되어도 전혀 문제없음.
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreeting(savedUsername);
}
