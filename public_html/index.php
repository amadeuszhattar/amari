<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JustJoinIt</title>

    <link rel="stylesheet" href="css/main.css" />

    <script
      src="https://kit.fontawesome.com/b160ac93e6.js"
      crossorigin="anonymous"
    ></script>
  </head>

  <body>
  <?php include 'connection.php'?>
    <div id="main-container">
      <div id="content-container">
        <div class="offer-container-menu">
          <div class="menu-left">
          <p class="with-salary">With salary</p>
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
                <p class="offer-tech">html</p>
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
    <div class="offer-map">
      <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe>
      <a href="#" class="map-button">Map</a>
      <div class="close-map-button"></div>
    </div>
    </div>
    
    
    <script src="/public/js/index.js"></script>
  </body>

</html>



