<?php
/* header('Access-Control-Allow-Origin: https://davmund.cl'); */
header('Access-Control-Allow-Origin: *');
header('Content-type: text/html; charset=utf-8');

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);

 include("../Formulario/conect.php");

 //$rs = mysqli_query($conection,"select * from categorias");
 $rs = $conection->query("select * from proyectos");
 $conection->set_charset("utf8");

 $objproyectos = new stdClass();
 $listaproyectos = [];

 while ($row = mysqli_fetch_array($rs,MYSQLI_ASSOC)){
    $proyecto = new stdClass();
    $proyecto-> id = $row['Proy_id'];
    $proyecto-> name = $row['Proy_name'];
    $proyecto-> description = $row['Proy_description'];
    $proyecto-> images = $row['Proy_images'];
    $proyecto-> category = $row['Proy_category'];
    

    $listaproyectos[] = $proyecto;
 }

 $objproyectos->listaproyectos = $listaproyectos;

mysqli_close($conection);
echo json_encode($objproyectos);
?>
