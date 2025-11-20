<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
require_once 'conexão.php';

$data = json_decode(file_get_contents('php://input'), true);

$nome     = $data['name'] ?? '';
$email    = $data['email'] ?? '';
$telefone = $data['phone'] ?? '';
$assunto  = $data['subject'] ?? '';
$mensagem = $data['message'] ?? '';

if ($nome && $email && $assunto && $mensagem) {
    $sql = "INSERT INTO contato (nome, email, telefone, assunto, mensagem) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $nome, $email, $telefone, $assunto, $mensagem);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => $conn->error]);
    }
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'error' => 'Campos obrigatórios ausentes']);
}

$conn->close();
?>