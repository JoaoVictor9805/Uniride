<?php
session_start();

$codigo = $_POST['codigo'];

if ($codigo == $_SESSION['codigo']) {
    $_SESSION['logado'] = true;
    echo json_encode(["status" => "ok"]);
} else {
    echo json_encode(["status" => "erro"]);
}