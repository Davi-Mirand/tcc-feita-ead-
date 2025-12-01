<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
require_once 'conexão.php';

$data = json_decode(file_get_contents('php://input'), true);

file_put_contents('debug_pedido.txt', print_r($data, true));

$nome      = $data['nome'] ?? '';
$descricao = $data['descricao'] ?? '';
$servico   = $data['servico'] ?? '';
$embalagem = $data['embalagem'] ?? '';
$quantidade = $data['quantidade'] ?? 0;

if ($nome && $descricao && $servico && $embalagem && $quantidade > 0) {
    $sql = "INSERT INTO pedido (nome, descricao, servico, embalagem, quantidade) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssi", $nome, $descricao, $servico, $embalagem, $quantidade);

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
