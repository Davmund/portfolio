<?php
/* header('Access-Control-Allow-Origin: https://davmund.cl'); */
header('Access-Control-Allow-Origin: *');
header('Content-type: text/html; charset=utf-8');

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);

 include("../Formulario/conect.php");

 //$rs = mysqli_query($conection,"select * from categorias");
 $rs = $conection->query("select * from educacion");
 $conection->set_charset("utf8");

 $objeducacion = new stdClass();
 $listacursos = [];

 while ($row = mysqli_fetch_array($rs,MYSQLI_ASSOC)){
    $educacion = new stdClass();
    $educacion-> id_ed = $row['id_ed'];
    $educacion-> fecha_desde = $row['fecha_desde'];
    $educacion-> fecha_hasta = $row['fecha_hasta'];
    $educacion-> nombre_ed = $row['nombre_ed'];
    $educacion-> institucion_ed = $row['institucion_ed'];
    $educacion-> descripcion_ed = $row['descripcion_ed'];
    

    $listacursos[] = $educacion;
 }

 $objeducacion->listacursos = $listacursos;

mysqli_close($conection);
echo json_encode($objeducacion);
?>
