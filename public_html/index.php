<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>JustJoinIt</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
   integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
   crossorigin=""/>
   <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
   integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
   crossorigin=""></script>
   <link rel="stylesheet" href="css/main.css" />


    <script
      src="https://kit.fontawesome.com/b160ac93e6.js"
      crossorigin="anonymous"
    ></script>
  </head>


  <body>
    <div id="main-container">
      <div id="content-container">
        <div class="offer-container-menu">
          <div class="menu-left">
          <p class="with-salary">With Salary</i></p>
          <p class="all-offers">All offers</p>
          </div>
          <div class="menu-right">
            <p class="remote-filter">Remote</p>
            <p class="date-filter">Latest</p>
          </div>
        </div>
        <div id="offer-container">
          <div class="offer-img-box">
          <img class="offer-img" src="img/map.jpg" alt="">
          </div>
          <div class="offer-box">
            <div class="offer-box-top">
              <div class="offer-title-box">
                <h2 class="offer-title">Junior front-end developer</h2>
              </div>
              <div class="offer-salary">
                <p class="offer-amount">20k - 25k</p>
                <p class="offer-new">New</p>
              </div>
            </div>
            <div class="offer-box-bottom">
              <div class="offer-location-box">
                <p class="offer-company">Amari benefits it</p>
                <p class="offer-location">Ireland, Dublin</p>
                <p class="offer-remote">Remote Job</p>
              </div>
              <div class="offer-tech-box">
                <p class="offer-tech">JavaScript</p>
                <p class="offer-tech">JavaScript</p>
                <p class="offer-tech">JavaScript</p>
              </div>
            </div>
          </div>
        </div>
        <div id="offer-container">
          <div class="offer-img-box">
          <img class="offer-img" src="img/map.jpg" alt="">
          </div>
          <div class="offer-box">
            <div class="offer-box-top">
              <div class="offer-title-box">
                <h2 class="offer-title">Junior front-end developer</h2>
              </div>
              <div class="offer-salary">
                <p class="offer-amount">20k - 25k</p>
                <p class="offer-new">New</p>
              </div>
            </div>
            <div class="offer-box-bottom">
              <div class="offer-location-box">
                <p class="offer-company">Amari benefits it</p>
                <p class="offer-location">Ireland, Dublin</p>
                <p class="offer-remote">Remote Job</p>
              </div>
              <div class="offer-tech-box">
                <p class="offer-tech">JavaScript</p>
                <p class="offer-tech">JavaScript</p>
                <p class="offer-tech">JavaScript</p>
                <p class="offer-tech">html</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button id="map-button"><span class="map-icon material-symbols-outlined">map</span>Map</button>
      <div id="offer-map">
      <div id="map"></div>  
      </div>
      <span id="map-close" class="material-symbols-outlined">cancel</span>
    </div>
    


    <script src="index.js"></script>
  </body>

</html>



