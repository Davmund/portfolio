<?php

include "../../../Formulario/conect.php";

$user= $_POST['usuario'];
$pass = $_POST['pass'];
$pass_enc ='';


function encriptaContraseña ($pass){
    $pass_enc = password_hash($pass,PASSWORD_DEFAULT);
    echo $pass_enc;

}

$query = "SELECT * FROM users WHERE user = '$user'";
$resultado = mysqli_query($conection, $query);

if(!$resultado){
    echo json_encode('error2');
    exit;
}else{
    $user = mysqli_num_rows($resultado);
    $buscaPass = mysqli_fetch_array($resultado);

    if(($user = 1)&&(password_verify($pass,$buscaPass['password']))){
        echo 'ok';
    }else{
        echo 'error1';
    }
}







?>