<?php
// Arquivo PHP para detalhes da embalagem (api/detalhe-embalagem.php)

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "embalagens";

try {
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    mysqli_set_charset($conn, "utf8mb4"); // garante compatibilidade com UTF-8

    if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
        http_response_code(400); // Bad Request
        echo json_encode(["erro" => "ID da embalagem inválido."]);
        exit;
    }

    $id = intval($_GET['id']);
    $sql = "SELECT id, nome, quantidade, urlimg, descricao, tipo_embalagem, material 
            FROM tipos_embalagem 
            WHERE id = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if ($result && mysqli_num_rows($result) > 0) {
        $embalagemDetalhe = mysqli_fetch_assoc($result);
        http_response_code(200);
        echo json_encode($embalagemDetalhe);
    } else {
        http_response_code(404); // Not Found
        echo json_encode(["erro" => "Embalagem não encontrada."]);
    }

    mysqli_stmt_close($stmt);
    mysqli_close($conn);

} catch (Exception $e) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["erro" => "Erro no servidor: " . $e->getMessage()]);
}
?>
