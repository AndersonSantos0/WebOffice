<?php 
    $host = "localhost";//host do mysql
    $user = "1350401";//nome do usuário
    $pass = "15111797";//senha do usuário
    $banco = "1350401";//nome do banco de dados
    $conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());//conecta ao mysql, ou mostra o erro
    mysqli_select_db($conexao, $banco) or die(mysql_error());//seleciona o banco, ou mostra o erro
?>