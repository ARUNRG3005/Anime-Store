<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["id"])) {
    echo json_encode(["success" => false]);
    exit;
}

$conn = new mysqli("localhost", "root", "", "anime_store");

if ($conn->connect_error) {
    echo json_encode(["success" => false]);
    exit;
}

$id = $data["id"];

$sql = "DELETE FROM products WHERE id=$id";

if ($conn->query($sql)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}

$conn->close();
?>
