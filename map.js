"use strict";

// default map container
const mapContainer = document.querySelector("#map");
const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: "abcd",
  maxZoom: 20,
}).addTo(map);

// create popup markup
const createMarkup = function (popup) {
  return `
  <div class="popup__image--container">
      <img class="popup__image" src="${popup.companyImg}" alt="">
    </div>
    <div class="popup__job--details">
      <p>${popup.title}</p>
      <p class="popup__salary--amount">${popup.salary}</p>
      <p>${popup.company}</p>
    </div>
  `;
};

const renderIcon = function (response) {
  response.icons.map((el) => {
    const data = el;
    // set icons settings
    const techIcon = L.icon({
      iconSize: 30,
      iconUrl: data.img,
    });

    // create icons
    const popup = L.popup({
      offset: [0, -10],
      className: "popuptest",
      closeOnClick: "*",
      closeButton: false,
      content: createMarkup(data),
    });

    const markerIcon = L.marker(data.coords, {
      icon: techIcon,
    }).addTo(map);
    markerIcon.on("mouseover", function (e) {
      e.target.bindPopup(popup);
      e.target.openPopup();
    });
    markerIcon.on("mouseout", function (e) {
      e.target.closePopup();
    });
  });
};

// fetch icons data
const getData = async function () {
  const data = await fetch("./map.json");
  const response = await data.json();
  // render icon
  renderIcon(response);
};
getData();
