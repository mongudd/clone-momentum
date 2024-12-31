const clock = document.querySelector("#clock");

// 시간 표시 방식 00:00:00로 바꾸기!
// padStart(최대길이, 빈공간을 무엇으로 채울지 "1", "x",,,) : string 앞 padding 추가

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // number -> string : String()으로 감싸기
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 1초 대기 없이 바로
setInterval(getClock, 1000);
