<?php 
include "..\Formulario\conect.php";

$id = $_POST['elemento'];
$tipo = $_POST['tipo'];
$query = '';

if($tipo === 'experiencias'){
    $query = "DELETE FROM experiencia WHERE id_exp ='$id'";
}else{
    $query = "DELETE FROM educacion WHERE id_ed ='$id'";
}

$resultado = mysqli_query($conection,$query);
    if(!$resultado){
        echo json_encode('error2');
    }else{
        echo json_encode('ok');
    }

?>