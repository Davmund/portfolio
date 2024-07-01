<?php
//crea carpeta si existe y si no
    function creaCarpeta ($cat,$proy,$files){
        $rutaDeSubidas = "../../images/{$cat}/{$proy}/";

        if(file_exists($rutaDeSubidas)){     

            // Verificar si se subieron archivos
            if (isset($files)) {
            // Recorrer y procesar cada archivo
            for ($i = 0; $i < count($files['name']); $i++) {
                $nombre = $files['name'][$i];
                $tipo = $files['type'][$i];
                $tamano = $files['size'][$i];
                $temporal = $files['tmp_name'][$i];
                $error = $files['error'][$i];

                $ubicacionFinal = $rutaDeSubidas . basename($files['name'][$i]);
                // Validar y mover el archivo (similar al ejemplo anterior)
                move_uploaded_file($files['tmp_name'][$i], $ubicacionFinal);
            }
        }
            //echo "carpeta no existe y se llama {$cat}";

        }else{

            mkdir($rutaDeSubidas,0777,true);

           // Verificar si se subieron archivos
           if (isset($files)) {
            // Recorrer y procesar cada archivo
            for ($i = 0; $i < count($files['name']); $i++) {
                $nombre = $files['name'][$i];
                $tipo = $files['type'][$i];
                $tamano = $files['size'][$i];
                $temporal = $files['tmp_name'][$i];
                $error = $files['error'][$i];

                $ubicacionFinal = $rutaDeSubidas . basename($files['name'][$i]);
                // Validar y mover el archivo (similar al ejemplo anterior)
                move_uploaded_file($files['tmp_name'][$i], $ubicacionFinal);
            }

            //echo "carpeta existe y se llama {$cat}";
        }
    }
}
?>