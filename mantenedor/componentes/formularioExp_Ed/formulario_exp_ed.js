let objF = '';

class FormularioEditor extends Modal_v2 {
    constructor (id,nombre,institucion,inicio,termino,detalle,tipo){
        super();
        this.id = id;
        this.nombre = nombre;
        this.institucion = institucion;
        this.inicio = inicio;
        this.termino = termino;
        this.detalle = detalle;
        this.tipo = tipo;
    }

    get formulario(){
        return this.armaForm();
    }


    armaForm(){
        let contenedor = document.getElementById('modal_interior');
        let t = this.tipo;

        let title = document.createElement('h2')
        t == 'experiencias' ? title.innerText = 'Modifica la experiencia': title.innerText = 'Modifica el nivel educativo';
        contenedor.appendChild(title)

        let form = document.createElement('form')
        form.id = 'formEditer';
        form.className = 'formEditer';
        contenedor.appendChild(form)

        let campo0 = document.createElement('input')
        campo0.type = 'hidden';
        campo0.name = 'tipo';
        campo0.value = this.tipo;
        form.appendChild(campo0);

        let campo01 = document.createElement('input')
        campo01.type = 'hidden';
        campo01.name = 'id';
        campo01.value = this.id;
        form.appendChild(campo01);

        let label1 = document.createElement('label')
        label1.for = this.nombre;
        t == 'experiencias' ? label1.innerText = 'Nombre de la experiencia': label1.innerText = 'Nombre del titulo o estudios';
        form.appendChild(label1);

        let campo1 = document.createElement('input')
        campo1.type = 'text';
        campo1.name = 'nombre';
        campo1.value = this.nombre;
        label1.appendChild(campo1);

        let label2 = document.createElement('label')
        label2.for = 'institucion';
        t == 'experiencias' ? label2.innerText = 'Empleador': label2.innerText = 'Institución educacional';
        form.appendChild(label2);

        let campo2 = document.createElement('input')
        campo2.type = 'text';
        campo2.name = 'institucion';
        campo2.value = this.institucion;
        label2.appendChild(campo2);

        //bloque de fechas
        let bloque = document.createElement('div')
        bloque.className = 'formediter_bloque';
        form.appendChild(bloque)
        //campo inicio
        let label3 = document.createElement('label')
        label3.for = this.nombre;
        label3.innerText = 'Fecha de inicio';
        bloque.appendChild(label3);
        
        let campo3 = document.createElement('input')
        campo3.type = 'month';
        campo3.value = this.inicio;
        campo3.name = 'inicio';
        label3.appendChild(campo3);
        //campo termino
        let label4 = document.createElement('label')
        label4.for = 'termino';
        label4.innerText = 'Fecha término';
        bloque.appendChild(label4);

        let campo4 = document.createElement('input')
        campo4.type = 'month';
        campo4.value = this.termino;
        campo4.name = 'termino';
        label4.appendChild(campo4);
        //fin de fechas

        let label5 = document.createElement('label')
        label5.for = 'detalle';
        t == 'experiencias' ? label5.innerText = 'Detalle de la experiencia': label5.innerText = 'Detalle del curso o estudios';
        form.appendChild(label5);

        let campo5 = document.createElement('textarea')
        campo5.value = this.detalle;
        campo5.name = 'detalle';
        label5.appendChild(campo5);

        let boton = document.createElement('button');
        boton.innerText = 'Guardar cambios';
        boton.className = "button_primary";
        boton.id = "submit";
        boton.type = "submit";
        form.appendChild(boton);

        const b = document.getElementById('submit');
        b.addEventListener('click', e => this.enviaDatos(e),true);

        //return title;

    }

    enviaDatos(a){
        a.preventDefault();
        const form = document.getElementById('formEditer');
        let datos = new FormData(form);
        fetch('php/editor.php',{
            method:'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            this.validaCambios(data);
        })
    }

    validaCambios(a){
        let url = '';
        this.tipo == 'experiencias' ? url = 'http://localhost:3000/mantenedor/servicios/listaExperiencias.php' : url = 'http://localhost:3000/mantenedor/servicios/listaCursos.php';
       /*  this.tipo == 'experiencias' ? url = 'https://www.davmund.cl/mantenedor/servicios/listaExperiencias.php' : url = 'https://www.davmund.cl/mantenedor/servicios/listaCursos.php'; */
        this.tipo == 'experiencias' ? dataExpe = '': dataC = '';
        this.tipo == 'experiencias' ? experiencias = []: cursos = [];

        if(a == 'error1'){
            toastCall(null,'error1');
        }else if(a == 'error2'){
            toastCall(null,'error2');
        }else{
            fetch(url)
            .then(response2 => response2.json())
            .then(response2 => (this.tipo == 'experiencias' ? dataExpe = response2.listaexperiencias : dataC = response2.listacursos))
            .then(this.tipo == 'experiencias' ? creararrayExp : creararrayC)
            .then(this.cierra)
            .then(toastCall(null,'ok'))
            .then(
                setTimeout(()=>{
                    armaLista('editorM_lista',this.tipo,'')
                },90)
            )
        }

    }
}

function callFormulario(ob,t){
    const o = new FormularioEditor(ob.id,ob.name,ob.institucion,ob.fecha_inicio,ob.fecha_hasta,ob.descripcion,t)
    objF = o
    objF.modal
    console.log(objF)
    setTimeout(()=>{
        o.formulario
    },500)

}