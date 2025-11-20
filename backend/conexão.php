<?php
$servername = "localhost";
$username = "root";
$password = ""; // sua senha
$dbname = "embalagens"; // troque pelo nome do seu banco

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
