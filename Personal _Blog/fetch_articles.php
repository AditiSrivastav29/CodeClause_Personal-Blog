<?php

$servername = 'localhost'; 
$username = 'root'; 
$password = '';
$dbname = 'articles'; 

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

$articles = [];
$sql = 'SELECT title, content FROM blog';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $articles[] = $row;
  }
}

$conn->close();


header('Content-Type: application/json');
echo json_encode($articles);
?>
