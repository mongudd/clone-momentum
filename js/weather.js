//navigator.geolocation.getCurrentPosition(Success함수, Error함수)
// API : 다른 서버와 이야기 할 수 있는 방법
// open weather map : https://openweathermap.org/api
// API key is on my profile

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });
  // fetch : JS is calling url instead of clicking url
  // json : information inside fetched url
}

function onGeoError() {
  alert("Cat't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
