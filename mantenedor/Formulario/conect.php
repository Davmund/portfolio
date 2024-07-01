<?php

$server ="localhost";
$user = "root";
$pass = "";
$db = "my_portafolio";

/* $server ="davmund.cl";
$user = "davmundc_root";
$pass = "~)mPX^c[NUBe";
$db = "davmundc_my_portafolio"; */

$conection = new mysqli($server,$user,$pass,$db);
$conection->set_charset("utf8");

if($conection->connect_error){
    die("error de conexión". $conexion->connect_error);
} else {
    //echo "Conexión establecida";
}
?>