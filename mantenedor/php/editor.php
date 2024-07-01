<?php 
//archivo para enviar modificaciones a la BD
include "..\Formulario\conect.php";
$query = '';

$type = $_POST['tipo'];
$id = $_POST['id'];
$new_name = $_POST['nombre'];
$new_institucion = $_POST['institucion'];
$new_iniDate = $_POST['inicio'];
$new_endDate = $_POST['termino'];
$new_description = $_POST['detalle'];

if($type === '' || $new_name === '' || $id === '' || $new_institucion === '' || $new_iniDate === ''|| $new_endDate === '' || $new_description === ''){
    echo json_encode('error1');
}else{
    //echo json_encode('ok');
    if($type === 'experiencias'){
        $query = "UPDATE experiencia 
        set fecha_inicio = '$new_iniDate',
            fecha_hasta = '$new_endDate',
            nombre_exp = '$new_name',
            institucion_exp = '$new_institucion',
            descripcion_exp	 = '$new_description'
            WHERE id_exp = $id";
    }else{
        $query = "UPDATE educacion
        set fecha_desde = '$new_iniDate',
            fecha_hasta = '$new_endDate',
            nombre_ed = '$new_name',
            institucion_ed = '$new_institucion',
            descripcion_ed	 = '$new_description'
            WHERE id_ed = $id";
    }
    
    $resultado = mysqli_query($conection,$query);
    if(!$resultado){
        echo json_encode('error2');
    }else{
        echo json_encode('ok');
    }
}

?>