<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "anime_store");
if ($conn->connect_error) {
  echo json_encode(["success" => false]);
  exit;
}

$title = $_POST["title"];
$price = $_POST["price"];
$description = $_POST["description"];

// IMAGE HANDLING
$imageName = time() . "_" . $_FILES["image"]["name"];
$imageTmp = $_FILES["image"]["tmp_name"];
$uploadPath = "uploads/" . $imageName;

move_uploaded_file($imageTmp, $uploadPath);

// SAVE TO DB
$sql = "INSERT INTO products (title, price, image, description)
        VALUES ('$title', '$price', '$imageName', '$description')";

if ($conn->query($sql)) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["success" => false]);
}

$conn->close();
?>
