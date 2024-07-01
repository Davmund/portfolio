<?php
/* header('Access-Control-Allow-Origin: https://davmund.cl'); */
header('Access-Control-Allow-Origin: *');
header('Content-type: text/html; charset=utf-8');

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);

 include("../Formulario/conect.php");

 //$rs = mysqli_query($conection,"select * from categorias");
 $rs = $conection->query("select * from categorias");
 $conection->set_charset("utf8");

 $objcategorias = new stdClass();
 $listacategorias = [];

 while ($row = mysqli_fetch_array($rs,MYSQLI_ASSOC)){
    $categoria = new stdClass();
    $categoria-> id_cat = $row['id'];
    $categoria-> nombre_categoria = $row['cat_name'];
    

    $listacategorias[] = $categoria;
 }

 $objcategorias->listacategorias = $listacategorias;

mysqli_close($conection);
echo json_encode($objcategorias);
?>
