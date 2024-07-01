let valorTippe = '';

function enviaExp(a){//funcion envia datos a php
    a.preventDefault();
    const form = document.getElementById('formularioExperiencia');
    let datosN = new FormData(form);

    if(datosN.get('nueva') === '' || datosN.get('institucion') === '' || datosN.get('inicio') === '' || datosN.get('termino')===''|| datosN.get('detalle')===''){
        toastCall(null,'error1')
    }else{
        fetch('Experiencia/php/carga.php',{
            method:'POST',
            body: datosN
        })
        .then(res => res.json())
        .then(dataN => {
            //console.log(data);
            validaCambios(valorTippe,form);
            //validaInsert(dataN,form);
        })
    }

}

function validaInsert(a,f){//agregar actualización de lista
    if(a != 'ok'){
        toastCall(null,'error2');
    }
    else{
        toastCall(null,'ok');
        f.reset();
    }
}

function setText(a){
    const h = document.getElementById('headerForm');
    const nu = document.getElementById('nueva');
    const ins = document.getElementById('institucion');
    const det = document.getElementById('detalle');

    a == 'lexp' ?   h.innerText = 'Nueva Experiencia Laboral': h.innerText = 'Nuevo nivel educacional';
    a == 'lexp'?    (nu.insertAdjacentText('beforebegin','Cargo ocupado'),nu.placeholder = 'Ej: Diseñador integrador'):
                    (nu.insertAdjacentText('beforebegin','Nuevo curso o diploma'),nu.placeholder = 'Ej: UX en agile');
    a == 'lexp'?    (ins.insertAdjacentText('beforebegin','Empleador'),ins.placeholder = 'Ingrese la institución'):
                    (ins.insertAdjacentText('beforebegin','Institución educacional'),ins.placeholder = 'Ingrese la institución estudios');
    a == 'lexp'?    (det.insertAdjacentText('beforebegin','Detalle de la experiencia'),det.placeholder = 'Ingrese una descripción de las funciones')
                    :(det.insertAdjacentText('beforebegin','Detalle del curso'),det.placeholder = 'Ingrese una descripción del curso o diplomado.');

}

function iniExperiencia(a){
    valorTippe = a;
    setTimeout(()=>{
        setText(a);
        document.getElementById('tipo').value = a;
        const bNF = document.getElementById('submitE');
        bNF.addEventListener('click', e => enviaExp(e),true);
    },100)

}

function validaCambios(a,f){
    console.log(a);
    let url = '';
    a == 'lexp' ? url = 'http://localhost:3000/mantenedor/servicios/listaExperiencias.php' : url = 'http://localhost:3000/mantenedor/servicios/listaCursos.php';
    /* a == 'lexp' ? url = 'https://www.davmund.cl/mantenedor/servicios/listaExperiencias.php' : url = 'https://www.davmund.cl/mantenedor/servicios/listaCursos.php'; */
    a == 'lexp' ? dataExpe = '': dataC = '';
    a == 'lexp' ? experiencias = []: cursos = [];

    if(a == 'error1'){
        toastCall(null,'error1');
    }else if(a == 'error2'){
        toastCall(null,'error2');
    }else{
        fetch(url)
        .then(response2 => response2.json())
        .then(response2 => (a == 'lexp' ? dataExpe = response2.listaexperiencias : dataC = response2.listacursos))
        .then(f.reset())
        .then(a == 'lexp' ? creararrayExp : creararrayC)
        .then(toastCall(null,'ok'))
    }

}