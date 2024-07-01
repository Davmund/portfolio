<?php
header('Content-type: text/html; charset=utf-8');
include("conect.php");
include("cargaImagenes.php");
//valores recuperados
$categoria = $_POST['categoriaProyecto'];
$nuevacategoria = $_POST['nuevaCatH'];
$nombrProyecto = $_POST['nombreProyecto'];
$descripcionProyecto = $_POST['descripcionProyecto'];
$imagenes = $_POST['imagenesAll'];
$nombre_archivo = $_FILES['imagenesProyecto'];
$pkcat = '';

//envío a base de datos una categoria existente
if($nuevacategoria == 'false'){
    $ims = array();
    for ($i = 0; $i < count($nombre_archivo['name']); $i++) {
        array_push($ims, $nombre_archivo['name'][$i]);
    }
    $im= implode(",", $ims);
    $sql="INSERT INTO proyectos(`Proy_name`, `Proy_description`, `Proy_images`,`Proy_category`) VALUES(
        '$nombrProyecto',
        '$descripcionProyecto',
        /*'$imagenes',*/
        '$im',
        '$categoria'
        )";
        $resultado = mysqli_query($conection,$sql);
        if(!$resultado){
            echo json_encode("no save");
        }else{
            echo json_encode("ok");
            $pkcat = $categoria;

            $sql2="SELECT * FROM categorias WHERE id = $categoria";//consulta para obtener id
            $resultado = mysqli_query($conection,$sql2);//se envia consulta consulta para obtener id

            if(!$resultado){
                echo json_encode("no id");
            }
            else{
                $nCat = $resultado->fetch_array()[1] ?? '';
                creaCarpeta($nCat,$nombrProyecto,$nombre_archivo);
            }
        }

}else {
    //guarda nueva categoria
    $nombrenuevacat = $_POST['nuevaCat'];
    $sql1="INSERT INTO categorias(`cat_name`) VALUES(
        '$nombrenuevacat'
        )";
    $resultado1 = mysqli_query($conection,$sql1);
    if(!$resultado1){
        echo json_encode("no cat");
    }else{
        $sql3="SELECT LAST_INSERT_ID() FROM categorias as id";
        $resultado3 = mysqli_query($conection,$sql3);
        if(!$resultado3){
            echo json_encode("no save in cat");
        }else{
            $pkcat = $resultado3->fetch_array()[0] ?? '';

            $ims = array();
            for ($i = 0; $i < count($nombre_archivo['name']); $i++) {
                array_push($ims, $nombre_archivo['name'][$i]);
            }

            $im= implode(",", $ims);
            //guarda proyecto
            $sql2="INSERT INTO proyectos(`Proy_name`, `Proy_description`, `Proy_images`, `Proy_category`) VALUES(
            '$nombrProyecto',
            '$descripcionProyecto',
            /*'$imagenes',*/
            '$im',
            '$pkcat'
            )";
            $resultado2 = mysqli_query($conection,$sql2);
            if(!$resultado2){
                echo("no save");
            }else{
                echo json_encode("ok");
            }
            creaCarpeta($nombrenuevacat,$nombrProyecto,$nombre_archivo);
        }
        
    }

}

?>