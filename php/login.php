<?php
    include_once('conexao.php');

    $retorno = [
        'status' => '', //ok ou nok
        'mensagem' => '', // mensagem de sucesso ou erro
        'data' => [] // efetivamente o retorno
        
    ]; 

    $stmt = $conexao->prepare("SELECT * FROM projeto WHERE usuario = ? AND senha = ?");
    $stmt->bind_param("ss", $_POST["usuario"], $_POST["senha"]);
    $stmt->execute(); 
    $resultado = $stmt->get_result();

    $tabela = []; 
    if($resultado->num_rows > 0){

        while($linha = $resultado->fetch_assoc()){
            $tabela[] = $linha;
        }

        $retorno = [
            'status' => 'ok',
            'mensagem' => 'registros encontrados',
            'data' => $tabela
        ];
        
        session_start();
        $_SESSION['usuario'] = $tabela;
    } else {
        $retorno = [
            'status' => 'nok',
            'mensagem' => 'Não encontrou nenhum registro',
            'data' => []
        ];
    }

    $stmt->close();
    $conexao->close();

header("Content-type:application/json; charset:utf-8"); 
echo json_encode($retorno); 
?>