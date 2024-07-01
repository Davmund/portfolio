//modal para mantenedor
var obp = '';

class EditorProy extends Modal_v2 {
    constructor (nombre, descripcion, id, tipo){
        super();
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.id = id;
        this.tipo = tipo;
    }

    get formulario(){
        return this.armaForm();
    }

    armaForm(){
        let contenedor = document.getElementById('modal_interior');

        let title = document.createElement('h2');
        title.className = 'modal_titulo';
        title.innerText = 'Modifica los datos del proyecto';
        contenedor.appendChild(title);

        let form = document.createElement('form');
        form.className = 'formM';
        form.id = 'modal_form';
        contenedor.appendChild(form);

        let idH = document.createElement('input');
        idH.type = 'hidden';
        idH.id = this.id;
        idH.name = "proy_id";
        idH.value = this.id;
        form.appendChild(idH);

        let labelNombre = document.createElement('label');
        labelNombre.innerText = 'Nombre del proyecto';
        labelNombre.for = "new_name";
        form.appendChild(labelNombre);

        let nombre = document.createElement('input');
        nombre.type = 'text';
        nombre.id = "new_name";
        nombre.name = "new_name";
        nombre.value = this.nombre;
        labelNombre.appendChild(nombre);

        let labelDescripcion = document.createElement('label');
        labelDescripcion.innerText = 'Descripción del proyecto';
        labelDescripcion.for = "new_description";
        form.appendChild(labelDescripcion);

        let descripcion = document.createElement('textarea');
        descripcion.innerText = this.descripcion;
        descripcion.id = "new_description";
        descripcion.name = "new_description";
        labelDescripcion.appendChild(descripcion);

        let boton = document.createElement('button');
        boton.value = 'guardar cambios';
        boton.innerText = 'Guardar cambios';
        boton.className = 'button_primary';
        boton.id = "submit";
        boton.type = "submit";
        form.appendChild(boton);

        const b = document.getElementById('submit');
        b.addEventListener('click', e => this.enviaDatos(e),true);

    }

    enviaDatos(a){
        a.preventDefault();
        const form = document.getElementById('modal_form');
        let datos = new FormData(form);

        fetch('php/edita_proyecto.php',{
            method:'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            this.validaCambios(data);
        })
    }
    validaCambios(a){
        dataP = '';
        lpOriginal = [];
        if(a == 'error1'){
            toastCall(null,'error1');
        }else if(a == 'error2'){
            toastCall(null,'error2');
        }else{
            fetch('http://localhost:3000/mantenedor/servicios/listaProyectos.php')
            /* fetch('https://www.davmund.cl/mantenedor/servicios/listaProyectos.php') */
            .then(response2 => response2.json())
            .then(response2 => (dataP = response2.listaproyectos))
            .then(creararrayP)
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

function callEditaP(d,t){
    //console.log(d);
    const obj = new EditorProy(d.name,d.description,d.id,t);
    obp = obj;
    obj.modal
    setTimeout(()=>{
        obj.formulario;
    },500)
}
