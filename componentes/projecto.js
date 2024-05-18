const targetA = document.getElementById('modal');

class Proyecto extends Modal {
    constructor (imagen, titulo, descripcion){
        super();
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    get proy(){
        return this.armaProyecto();
    }

    armaProyecto(){
        proy = "<div class='contenedor_text'><h1>"+this.titulo+"</h1><p>"+this.descripcion+"</p></div><div class='img'><img src='"+this.imagen+"' ></div>";
    }
}

function proyCall(d){
    const e = imagenes[d];
    const obj = new Proyecto(e.images[0],e.Title,e.desc);
    obj.proy;
    objetoModal = obj;
    return obj.modal;
}