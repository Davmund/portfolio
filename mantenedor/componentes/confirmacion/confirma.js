let objC = '';

class Confirma extends Modal_v2 {
    constructor (id,tipo){
        super();
        this.id = id;
        this.tipo = tipo;
    }

    get formulario(){
        return this.armaForm();
    }

    armaForm(){
        console.log(this.tipo);
        let contenedor = document.getElementById('modal_interior');

        let form_confirma = document.createElement('form');
        form_confirma.id = 'form_confirma';
        form_confirma.className = 'form_confirmar';
        contenedor.appendChild(form_confirma);

        let campo0 = document.createElement('input')
        campo0.type = 'hidden';
        campo0.name = 'elemento';
        campo0.value = this.id;
        form_confirma.appendChild(campo0);

        let campo2 = document.createElement('input')
        campo2.type = 'hidden';
        campo2.name = 'tipo';
        campo2.value = this.tipo;
        form_confirma.appendChild(campo2);

        let title = document.createElement('h2')
        title.innerText = '¿Seguro quieres eliminar este elemento?';
        form_confirma.appendChild(title)

        let buttonContent = document.createElement('div');
        buttonContent.className = 'contenedor_botones'
        contenedor.appendChild(buttonContent);

        let butt_1 = document.createElement('button');
        butt_1.className = 'button_ghost'
        butt_1.innerText = 'Cancelar';
        buttonContent.appendChild(butt_1);

        let butt_2 = document.createElement('button');
        butt_2.type = 'submit';
        butt_2.className = 'button_primary'
        butt_2.innerText = 'Confirmar';
        buttonContent.appendChild(butt_2);

        butt_1.addEventListener('click', e => this.cierra,true);
        butt_2.addEventListener('click', e => this.elimina(e),true);

    }



    elimina(a){
        a.preventDefault();
        const form = document.getElementById('form_confirma');
        let datos = new FormData(form);
        fetch('php/delete.php',{
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
        /* this.tipo == 'experiencias' ? url = 'https://www.davmund.cl/mantenedor/servicios/listaExperiencias.php' : url = 'https://www.davmund.cl/mantenedor/servicios/listaCursos.php'; */
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
function callConfirmacion(ob,t){
    const o = new Confirma(ob.id,t)
    objC = o
    objC.modal

    setTimeout(()=>{
        o.formulario
    },500)

}