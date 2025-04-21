<?php
// Arquivo PHP (exemplo: api/embalagens.php)

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = ""; // Sua senha
$dbname = "embalagens"; // Nome do seu banco de dados

// Cria a conexão
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verifica a conexão
if (!$conn) {
    die(json_encode(["erro" => "Falha na conexão com o MySQL: " . mysqli_connect_error()]));
}

$sql = "SELECT id, nome, quantidade, urlimg FROM tipos_embalagem";
$result = mysqli_query($conn, $sql);

$embalagens = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $embalagens[] = $row;
    }
}

mysqli_free_result($result);
mysqli_close($conn);

echo json_encode($embalagens);
?>