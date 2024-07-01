<?php
header('Content-type: text/html; charset=utf-8');
include "conect.php";

$user = $_POST['new_usuario'];
$pass = $_POST['pass'];
$pass_enc = password_hash($pass,PASSWORD_DEFAULT);


$query = "SELECT * FROM users WHERE `user` = '$user'";
$resultado = mysqli_query($conection, $query);

if(!$resultado){
    echo json_encode('error0');
    exit;
}else{
    if(mysqli_num_rows($resultado)){
        echo json_encode('error1');
    }else {
        $query2="INSERT INTO users(`user`, `password`) VALUES(
            '$user',
            '$pass_enc'
            )";
        $resultado = mysqli_query($conection, $query2);
        if(!$resultado){
            echo json_encode('error0');
            exit;
        }else{
            echo json_encode('ok');
        }
    }
}


?>