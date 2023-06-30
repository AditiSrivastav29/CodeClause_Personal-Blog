<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  $servername = 'localhost'; 
  $username = 'root'; 
  $password = ''; 
  $dbname = 'articles'; 

  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
  }

  
  $title = $_POST['title'];
  $content = $_POST['content'];

  
  $sql = "INSERT INTO blog (title, content) VALUES (?, ?)";
  $stmt = $conn->prepare($sql);

  
  $stmt->bind_param('ss', $title, $content);

  
  if ($stmt->execute()) {
    echo 'Article submitted successfully.';
  } else {
    echo 'Error: ' . $stmt->error;
  }

  $stmt->close();
  $conn->close();
}
?>
