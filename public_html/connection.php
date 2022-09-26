<?php
$servername = "localhost";
$username = "id19477557root";
$password = "9#rRqUBf!ADiLph";
$database = "id19477557_amariproject";
// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>