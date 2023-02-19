"use strict";
const API_URL = './map.json';
const mapContainer = document.querySelector("#map");
const mapOpenBtn = document.querySelector('.map__open--button');
const mapCloseBtn = document.querySelector('.map__close--button');
const mapCloseContainer = document.querySelector('.map__close--container')
const mapOpenContainer = document.querySelector('.map__open--container')


// default map container
const map = L.map("map").setView([51.505, -0.09], 8);
 const darkTheme = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd",
  maxZoom: 20,
});
darkTheme.addTo(map)

// fetch data
const getJson = async function (url) {
  try {
    const data = await fetch("./map.json");
    return data.json();
  } catch (error) {
    console.error(error);
  }
};


// rendering icons 
const renderIcon = async function () {
  try {
    const iconsData = await getJson(API_URL);
    iconsData.icons.map((el) => {
      const data = el;
      const { lat, lng } = el;

      const marker = createMarker(lat, lng, data);

      markerOnHover(marker, createPopup(data));
      markerOnOut(marker)
    });
    
  } catch (error) {
    console.error(error);
  }
};
renderIcon();


// create a marker 
const createMarker = function (lat, lng, data){
  return L.marker([lat, lng], {
    icon: createTechIcon(data),
  }).addTo(map);
}

// create a popup

const createPopup = function (data){
  return L.popup({
    offset: [0, -10],
    className: "popup__test",
    closeOnClick: "*",
    closeButton: false,
    content: createMarkup(data),
    maxWidth: 200,
  });
}

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


const createTechIcon = function (data){
 return  L.icon({
    iconSize: 30,
    iconUrl: data.img,
  });
}



const markerOnHover = function(marker, popup){
  marker.on("mouseover", function (e) {
      e.target.bindPopup(popup);
      e.target.openPopup();
  });
}

const markerOnOut = function(marker){
  marker.on("mouseout", function (e) {
    e.target.closePopup()
});
}

// handling map buttons

mapOpenBtn.addEventListener('click', function(e){
  darkTheme.addTo(map)
  mapContainer.style.display = 'block';
  mapOpenContainer.style.display = 'none';
  mapCloseContainer.style.display = 'block'
})

mapCloseBtn.addEventListener('click', function(e){
  mapContainer.style.display = 'none';
  mapOpenContainer.style.display = 'block';
  mapCloseContainer.style.display = 'none'
})
