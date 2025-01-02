//navigator.geolocation.getCurrentPosition(Success함수, Error함수)

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}

function onGeoError() {
  alert("Cat't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
