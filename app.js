/* 
const loginForm = document.getElementById("login-form");*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
/* simplify
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button"); */

// input 을 submit 했을때 새로고침 없이 value 를 당장 쓰고 싶다.

function onLoginSubmit(event) {
  // tomato,xxx,무엇이든 이름이 될 수 있지만 통상적으로 event로 작명
  // = 해당 괄호가 event의 정보를 담는 통이라 생각하면 쉬움 (event의 정보 = Object)
  event.preventDefault();
  // browser가 기본동작으로 실행하지 못하도록 막음.
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
// addEventListener("이벤트", 이벤트 발생시 실행시킬 함수)
// submit 이벤트가 발생 -> onLoginSubmit 함수를 실행
// JS는 onLoginSubmit 함수 호출시 인자를 담아서 호출함.
// 이벤트 발생시 실행시킬 함수의 "첫번째 argument"에 이벤트에 대한 정보 저장
