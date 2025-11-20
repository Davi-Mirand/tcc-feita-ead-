<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "embalagens";

// Ativar erros do mysqli (útil p/ debug)
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$conn->set_charset("utf8");

// Consulta
$sql = "SELECT id, nome, quantidade, descricao, tipo_embalagem, material, urlimg 
        FROM tipos_embalagem";
$result = $conn->query($sql);

$embalagens = [];
while ($row = $result->fetch_assoc()) {
    $embalagens[] = $row;
}

// Sempre retorna algo
echo json_encode($embalagens, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

$conn->close();
