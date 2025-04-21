<?php
// Arquivo PHP para detalhes da embalagem (exemplo: api/detalhe-embalagem.php)

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

// Verifica se o ID foi passado na URL
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = intval($_GET['id']);

    $sql = "SELECT id, nome, quantidade, urlimg, descricao, tipo_embalagem, material 
            FROM tipos_embalagem 
            WHERE id = ?"; // Usando prepared statement para segurança
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "i", $id); // "i" indica que o parâmetro é um inteiro
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
        $embalagemDetalhe = mysqli_fetch_assoc($result);
        echo json_encode($embalagemDetalhe);
    } else {
        echo json_encode(["erro" => "Embalagem não encontrada."]);
    }

    mysqli_stmt_close($stmt);
} else {
    echo json_encode(["erro" => "ID da embalagem inválido."]);
}

mysqli_close($conn);
?>