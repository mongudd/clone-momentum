/* 
const loginForm = document.getElementById("login-form");*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
/* simplify
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button"); */

function onBtnClick() {
  const value = loginInput.value;
  //console.log("Hello", loginInput.value); // value가 없어도 Hello
  /* changes in HTML. can utilize function in browser instead of this way.
  if (value === "") {
    alert("Please write your name");
  } else if (value.length > 15) {
    alert("Your name is too long");
  } */
  console.log(value);
}

loginBtn.addEventListener("click", onBtnClick);
