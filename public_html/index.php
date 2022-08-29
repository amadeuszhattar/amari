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
    <div id="offer-container">
      <div class="offer-img-box">
       <img class="offer-img" src="img/map.jpg" alt="">
      </div>
      <div class="offer-box">
        <div class="offer-box-top">
          <div class="offer-title-box">
            <h2 class="offer-title">Job title</h2>
          </div>
          <div class="offer-salary">
            <p class="offer-amount">20000 - 99999 PLN</p>
            <p class="offer-new">New</p>
          </div>
        </div>
        <div class="offer-box-bottom">
          <div class="offer-location-box">
            <p class="offer-company">Comapny name</p>
            <p class="offer-location">Offer location</p>
            <p class="offer-remote">Remote Job</p>
          </div>
          <div class="offer-tech-box">
            <p class="offer-tech">JavaScript</p>
            <p class="offer-tech">Html</p>
            <p class="offer-tech">Css</p>
          </div>
        </div>
      </div>

    </div>

    </div>  
    
    
    
    <?php
 $servername = "localhost";
 $username = "id19477557_root";
 $password = "9#rRqUBf!ADiLph_";
 $dbname = "id19477557_amariproject";

// // Create connection
 $conn = new mysqli($servername, $username, $password, $dbname);
// // Check connection
 if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
 }

$sql = "SELECT Company_id, Company_name, Company_description from Offers";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
//   // output data of each row
while($row = $result->fetch_assoc()) {
echo "id: " . $row["Company_id"]. " - Name: " . $row["Company_name"]. " Description: " . $row["Company_description"]. "<br>";
  }
 } else {
  echo "0 results";
 }
 $conn->close();
 ?>
  </body>

</html>