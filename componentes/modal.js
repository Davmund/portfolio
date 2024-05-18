const target = document.getElementById('modal');
//var objetoModal = '';//
var proy = '';

class Modal {
    constructor (){
    //constructor (imagen, titulo, descripcion){
        //this.imagen = imagen;
        //this.titulo = titulo;
        //this.descripcion = descripcion;
    }

    get modal(){
        return this.armaModal(proy,this.despliega());
    }

    get cierra(){
        return this.cierraModal();
    }

    armaModal(e){
        // ódigo viejo //// let modal = "<div class='contenedor' id='"+this.imagen+"'><div onclick='objetoModal.cierra' class='modal_close material-symbols-outlined'>close</div><div class='contenedor_text'><h1>"+this.titulo+"</h1><p>"+this.descripcion+"</p></div><div class='img'><img src='"+this.imagen+"' ></div></div>";
        let modal = "<div class='contenedor' id='"+this.imagen+"'><div onclick='objetoModal.cierra' class='modal_close material-symbols-outlined'>close</div>"+e+"</div>";
        target.classList.remove('m_off');
        target.classList.add('m_on');
        return target.innerHTML = modal;
    }

    despliega(){
        target.classList.add('m_show');
    }

    cierraModal(){
        let dv = document.getElementById(this.imagen);
        target.classList.remove('m_on');
        target.classList.add('m_off');
        objetoModal = '';
        proy = '';
        return dv.remove();
    }
}

//// atigua llamada a al modal //////()
/*function llamada(d){
    const e = imagenes[d];
    const obj = new Modal(e.url,e.Title,e.desc);
    objetoModal = obj;
    return obj.modal;
}*/