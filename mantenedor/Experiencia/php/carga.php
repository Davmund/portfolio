<?php
header('Content-type: text/html; charset=utf-8');
include("../../Formulario/conect.php");
//valores recuperados
$type = $_POST['tipo'];
$nueva = $_POST['nueva'];
$institucion = $_POST['institucion'];
$inicio = $_POST['inicio'];
$termino = $_POST['termino'];
$detalle = $_POST['detalle'];

//envío a base de datos
if($type == 'lexp'){
    $sql="INSERT INTO experiencia(`fecha_inicio`, `fecha_hasta`, `nombre_exp`,`institucion_exp`,`descripcion_exp`) VALUES(
        '$inicio',
        '$termino',
        '$nueva',
        '$institucion',
        '$detalle'
        )";
        
        $resultado = mysqli_query($conection,$sql);
        if(!$resultado){
            echo json_encode("no save");
        }else{
            echo json_encode("ok");
        }
}else{
    $sql="INSERT INTO educacion(`fecha_desde`, `fecha_hasta`, `nombre_ed`,`institucion_ed`,`descripcion_ed`) VALUES(
        '$inicio',
        '$termino',
        '$nueva',
        '$institucion',
        '$detalle'
        )";
        
        $resultado = mysqli_query($conection,$sql);
        if(!$resultado){
            echo json_encode("no save");
        }else{
            echo json_encode("ok");
        }
}


?>