<?php
    session_start(); 
    header('Content-Type: application/json');

    $usuario = $_SESSION['email'][0];

    $isMotorista = $usuario['motorista'] == 1;

    echo json_encode(['motorista' => $isMotorista]);
?>