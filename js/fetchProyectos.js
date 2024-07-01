let dataP = "";
let dataC = "";
let data1 = "";
let data2 = "";
let proyectosT = [];
let categoriasT = [];
let experiencias = [];
let cursos = [];


class ProyectoT{
    constructor(id,titulo,category,images,desc){
        this.id = id;
        this.title = titulo; 
        this.category = category;
        this.desc = desc;
        this.images = images; 
    }
}

class CategoriaT{
    constructor(id,nombre){
        this.id = id;
        this.nombre = nombre; 
    }
}

function creaListaProyectos(){
    if(dataP == '' || dataP == null || dataP == undefined){
        console.log('no hay data de proyectos')
    }else{
        for(var i=0; i<dataP.length ; i++ ){
            let id = dataP[i].id;
            let name = dataP[i].name;
            let category = dataP[i].category;
            let desc = dataP[i].description;
            let img = dataP[i].images.split(',');
            let images = [];
            let cat = "";
            for(let e=0;e<img.length;e++){
                for(d=0;d<categoriasT.length;d++){
                    dataP[i].category == categoriasT[d].id? cat = categoriasT[d].nombre:'';
                }
                images.push('images/'+cat+'/'+dataP[i].name+'/'+img[e])
                //console.log('imagenes: '+images)
            }
            var proyecto = new ProyectoT(id, name,category,images,desc);
            proyectosT.push(proyecto);
        }
        //console.log(proyectosT)
    }
}

function creaListaCategorias(){
    if(dataC == '' || dataC == null || dataC == undefined){
        console.log('No hay data de categorías')
    }else{
        for(var i=0; i<dataC.length ; i++ ){
            let id = dataC[i].id_cat;
            let name = dataC[i].nombre_categoria;
            var categoria = new CategoriaT(id, name);
            categoriasT.push(categoria);
        }
        //console.log(categoriasT)
    }
}

const fp = fetch("http://localhost:3000/mantenedor/servicios/listaProyectos.php");
const fc = fetch("http://localhost:3000/mantenedor/servicios/listaCategorias.php");
const fexp = fetch("http://localhost:3000/mantenedor/servicios/listaExperiencias.php");
const fcur = fetch("http://localhost:3000/mantenedor/servicios/listaCursos.php");

/* const fp = fetch("https://www.davmund.cl/mantenedor/servicios/listaProyectos.php");
const fc = fetch("https://www.davmund.cl/mantenedor/servicios/listaCategorias.php");
const fexp = fetch("https://www.davmund.cl/mantenedor/servicios/listaExperiencias.php");
const fcur = fetch("https://www.davmund.cl/mantenedor/servicios/listaCursos.php"); */
    
function inicioC () {
    fc.then(response => response.json())
    .then(response => (dataC = response.listacategorias))
    .then(creaListaCategorias)
    .then(inicioP)
}

function inicioP () {
    fp.then(response2 => response2.json())
    .then(response2 => (dataP = response2.listaproyectos))
    .then(creaListaProyectos)
}

async function cargaCur () {
    return new Promise ((resolve,reject) =>
        { 
            fcur.then(response3 => response3.clone().json())
            .then(response3 => (cursos = response3.listacursos))
            resolve();
        }
    )
}

async function cargaExp () {
    return new Promise ((resolve,reject) =>
        { 
            fexp.then(response4 => response4.clone().json())
            .then(response4 => (experiencias = response4.listaexperiencias))
            resolve()
        }
    )
}

async function inicaCargas (){
    const esperaCursos = await cargaCur();
    const esperaExp = await cargaExp();
}

inicaCargas();
inicioC(inicioP);