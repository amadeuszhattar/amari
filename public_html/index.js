// leaft let map

var map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    className: 'map-tiles'
}).addTo(map);
// map showing button

const mapButton = document.getElementById("map-button");
const leafletMap = document.getElementsByClassName("offer-map");
const offerBox = document.getElementById("content-container");

// mapButton.addEventListener(
//   "click",
//   function () {
//     document.getElementById("content-container").style.display = "none";
//     document.getElementById("offer-map").style.display = "block";
//   },
//   false
// );

document.getElementById("map-button").onclick = function () {
  document.getElementById("content-container").style.display = "none";
  document.getElementById("offer-map").style.display = "block";
  document.getElementById("map-close").style.display = "block";
};

document.getElementById("map-close").onclick = function () {
  document.getElementById("content-container").style.display = "block";
  document.getElementById("offer-map").style.display = "block";
  document.getElementById("map-close").style.display = "none";
};

console.log(mapButton);
console.log(leafletMap);
console.log(offerBox);
