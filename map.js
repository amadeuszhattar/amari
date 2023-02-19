"use strict";
const API_URL = "./map.json";
const mapContainer = document.querySelector("#map");
const mapOpenBtn = document.querySelector(".map__open--button");
const mapCloseBtn = document.querySelector(".map__close--button");
const mapCloseContainer = document.querySelector(".map__close--container");
const mapOpenContainer = document.querySelector(".map__open--container");
const map = L.map("map").setView([51.505, -0.09], 8);

// default map container
const renderMap = function () {
  const darkTheme = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
      subdomains: "abcd",
      maxZoom: 20,
    }
  ).addTo(map);
};
renderMap();

// fetch data
const getJson = async function (url) {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (error) {
    console.error(error);
  }
};

// rendering icons
const renderIcon = async function () {
  try {
    const iconsData = await getJson(API_URL);
    iconsData.icons.map((data) => {
      createIcon(data);

      const marker = createMarker(data);
      markerOnHover(marker, createPopup(data));
      markerOnOut(marker);
    });
  } catch (error) {
    console.error(error);
  }
};

renderIcon();
const createIcon = function (iconData) {
  return L.icon({
    iconSize: [30, 30],
    iconUrl: iconData.img,
  });
};

// create a marker
const createMarker = function (iconData) {
  const { lat, lng } = iconData;
  return L.marker([lat, lng], {
    icon: createIcon(iconData),
  })
    .setBouncingOptions({
      bounceHeight: 10, // height of the bouncing
      bounceSpeed: 100, // bouncing speed coefficient
      exclusive: true,  // if this marker is bouncing all others must stop
      elastic: false,
    })
    .addTo(map)
    .on("click", function () {
      this.toggleBouncing();
    });
};

// create a popup

const createPopup = function (data) {
  return L.popup({
    offset: [0, -10],
    className: "popup__test",
    closeOnClick: "*",
    closeButton: false,
    content: createMarkup(data),
    maxWidth: 200,
  });
};

// create popup markup
const createMarkup = function (popupData) {
  return `
    <div class="popup__container">
      <div class="popup__image--container">
        <img class="popup__image" src="${popupData.companyImg}" alt="">
      </div>
      <div class="popup__job--details">
        <p>${popupData.title}</p>
        <p class="popup__salary--amount">${popupData.salary}</p>
        <p>${popupData.company}</p>
      </div>
    </div>  
  `;
};

const markerOnHover = function (marker, popup) {
  marker.on("mouseover", function (e) {
    this.bindPopup(popup);
    this.openPopup();
  });
};

const markerOnOut = function (marker) {
  marker.on("mouseout", function (e) {
    this.closePopup();
  });
};

// handling map buttons

mapOpenBtn.addEventListener("click", function (e) {
  darkTheme.addTo(map);
  mapContainer.style.display = "block";
  mapOpenContainer.style.display = "none";
  mapCloseContainer.style.display = "block";
});

mapCloseBtn.addEventListener("click", function (e) {
  mapContainer.style.display = "none";
  mapOpenContainer.style.display = "block";
  mapCloseContainer.style.display = "none";
});
