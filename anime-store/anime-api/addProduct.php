<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "anime_store");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "DB error"]);
    exit;
}

/* ---------- VALIDATE INPUT ---------- */
if (
    !isset($_POST["title"]) ||
    !isset($_POST["price"]) ||
    !isset($_POST["description"]) ||
    !isset($_FILES["image"])
) {
    echo json_encode([
        "success" => false,
        "message" => "Missing fields"
    ]);
    exit;
}

$title = $_POST["title"];
$price = $_POST["price"];
$description = $_POST["description"];

/* ---------- FILE UPLOAD ---------- */
$imageName = time() . "_" . $_FILES["image"]["name"];
$tmpName = $_FILES["image"]["tmp_name"];

$uploadDir = "uploads/";
$uploadPath = $uploadDir . $imageName;

if (!move_uploaded_file($tmpName, $uploadPath)) {
    echo json_encode([
        "success" => false,
        "message" => "Image upload failed"
    ]);
    exit;
}

/* ---------- INSERT ---------- */
$sql = "INSERT INTO products (title, price, image, description)
        VALUES ('$title', '$price', '$imageName', '$description')";

if ($conn->query($sql)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Insert failed"]);
}

$conn->close();
