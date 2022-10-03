<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

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
  <?php include 'header.php'?>
    <div id="main-container">
      <div id="content-container">
        <div class="offer-container-menu">
          <div class="menu-left">
          <div id="with-salary" class="with-salary">With Salary</div>
          <div id="all-offers" class="all-offers">All offers</div>
          </div>
          <div class="menu-right">
              <select class="date-filter">  
              <option value = "latest"> Latest   
              </option>  
              <option value = "highestsalary"> Highest Salary   
              </option>  
              <option value = "lowestsalary"> Lowest Salary  
              </option>  
              </select> 
              <div class="remote-box">
            <p class="remote-filter">Remote </p>  
            <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
            </label>
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
              <p class="offer-company"><span class="material-symbols-outlined">
domain
</span>&nbsp;Amari benefits it</p>
                <p class="offer-location"><span class="material-symbols-outlined">
location_on
</span>&nbsp;Ireland, Dublin</p>
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
                <p class="offer-company"><span class="material-symbols-outlined">
domain
</span>&nbsp;Amari benefits it</p>
                <p class="offer-location"><span class="material-symbols-outlined">
location_on
</span>&nbsp;Ireland, Dublin</p>
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
    <script src="map.js"></script>
  </body>

</html>



