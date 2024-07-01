<?php
/* header('Access-Control-Allow-Origin: https://davmund.cl'); */
header('Access-Control-Allow-Origin: *');
header('Content-type: text/html; charset=utf-8');

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);

 include("../Formulario/conect.php");

 //$rs = mysqli_query($conection,"select * from categorias");
 $rs = $conection->query("select * from experiencia");
 $conection->set_charset("utf8");

 $objexperiencia = new stdClass();
 $listaexperiencias = [];

 while ($row = mysqli_fetch_array($rs,MYSQLI_ASSOC)){
    $experiencia = new stdClass();
    $experiencia-> id_exp = $row['id_exp'];
    $experiencia-> fecha_inicio = $row['fecha_inicio'];
    $experiencia-> fecha_hasta = $row['fecha_hasta'];
    $experiencia-> nombre_exp = $row['nombre_exp'];
    $experiencia-> institucion_exp = $row['institucion_exp'];
    $experiencia-> descripcion_exp = $row['descripcion_exp'];
    

    $listaexperiencias[] = $experiencia;
 }

 $objexperiencia->listaexperiencias = $listaexperiencias;

mysqli_close($conection);
echo json_encode($objexperiencia);
?>
