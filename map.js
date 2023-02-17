"use strict";

const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

const techIcon = L.icon({
    iconSize: 25,
    iconUrl: './tech-icons/icons8-javascript.svg',
})

L.marker([51.505, -0.09], {icon: techIcon}).addTo(map);

