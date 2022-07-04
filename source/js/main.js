const navMenu = document.querySelector('.menu-list');
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const VIEW = 20;
const DRINK2GO_LAT = 59.96831;
const DRINK2GO_LNG =  30.31748;


const MARKER_DATA = {
  iconUrl: './img/marker-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [26, 52],
};

navMenu.classList.remove('main-nav--nojs');

if (navMenu.classList.contains('menu-list--opened')) {
  navMenu.classList.remove('menu-list--opened');
  navMenu.classList.add('menu-list--closed');
};

if (navMenu.classList.contains('main-nav--opened')) {
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
};


navToggle.addEventListener('click', function() {
  if (navMenu.classList.contains('menu-list--closed')) {
    navMenu.classList.remove('menu-list--closed');
    navMenu.classList.add('menu-list--opened');
    mainNav.classList.add('main-nav--opened');
  }

  else {
    navMenu.classList.add('menu-list--closed');
    navMenu.classList.remove('menu-list--opened');
    mainNav.classList.remove('main-nav--opened');
  }
});

const map = L.map('map-container', { zoomControl:false })
  .setView({
    lat: DRINK2GO_LAT,
    lng: DRINK2GO_LNG,
  },VIEW);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerIcon = L.icon(MARKER_DATA);

const customMarker = L.marker({
  lat: DRINK2GO_LAT,
  lng: DRINK2GO_LNG,
},
{
  draggable: true,
  icon: markerIcon,
});

customMarker.addTo(map);

