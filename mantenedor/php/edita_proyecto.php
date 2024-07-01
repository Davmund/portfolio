<?php 
//archivo para enviar modificaciones a la BD
include "..\Formulario\conect.php";

$new_description = $_POST['new_description'];
$new_name = $_POST['new_name'];
$proy_id = $_POST['proy_id'];

if($new_description === '' || $new_name === '' || $proy_id === ''){
    echo json_encode('error1');
}else{
    //echo json_encode('ok');
    $query = "UPDATE proyectos set Proy_name = '$new_name', Proy_description = '$new_description' WHERE Proy_id = $proy_id";
    $resultado = mysqli_query($conection,$query);
    if(!$resultado){
        echo json_encode('error2');
    }else{
        echo json_encode('ok');
    }
}

?>