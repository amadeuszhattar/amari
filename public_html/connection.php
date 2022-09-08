<?php
$servername = "localhost";
$username = "id19477557root";
$password = "9#rRqUBf!ADiLph";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>