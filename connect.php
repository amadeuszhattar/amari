<?php
$servername = "http://34.79.5.92";
$database = "database";
$username = "root";
$password = "npD3UAHfPXNrL4";

// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

echo “Connected successfully”;

mysqli_close($conn);

?>