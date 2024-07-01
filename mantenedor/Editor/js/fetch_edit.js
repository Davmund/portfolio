const dataEdit = "http://localhost:3000/mantenedor/servicios/listaCategorias.php";
const dataPEdit = "http://localhost:3000/mantenedor/servicios/listaProyectos.php";
/* const dataEdit = "https://www.davmund.cl/mantenedor/servicios/listaCategorias.php";
const dataPEdit = "https://www.davmund.cl/mantenedor/servicios/listaProyectos.php"; */
var data = "";
var categoriasEdit = [];
var dataP = '';
var proyectos =[];

class CategoriaE{
    constructor(id,name){
        this.id = id;
        this.name = name; 
    }
}

class Proyecto{
    constructor(id,name,description,images,category){
        this.id = id;
        this.name = name;
        this.description = description; 
        this.images = images;
        this.category = category;
    }
}

function creararrayE(){//creación de array de categorias
    if(data == '' || data == null || data == undefined){
        categorias = [];
        //console.log('no hay data');
        return pinta(null);
    }else{
        categoriasEdit = [];
        for(var i=0; i<data.length ; i++ ){
            let catid = data[i].id_cat;
            let catname= data[i].nombre_categoria;
            var categoria = new CategoriaE(catid,catname);
            categoriasEdit.unshift(categoria);
        }
        iniFetchEditP();
        return pinta(categoriasEdit);
    }
}

function creararrayP(){//creación de array de proyectos
    if(dataP == '' || dataP == null || dataP == undefined){
        //console.log('no hay data');
        return ;
    }else{
        proyectos = [];
        for(var i=0; i<dataP.length ; i++ ){
            let id = dataP[i].id;
            let name= dataP[i].name;
            let description= dataP[i].description;
            let images= dataP[i].images;
            let category= dataP[i].category;

            var proyecto = new Proyecto(id,name,description,images,category);
            proyectos.push(proyecto);
        }
        lpOriginal=proyectos;
    }
}


let inicioPa = fetch(dataEdit);
let inicioP = fetch(dataPEdit);

function iniFetchEdit () {///fetch para obtrener categorias
    inicioPa.then(response => response.clone().json())
        .then(response => (data = response.listacategorias))
        .then(creararrayE);

}

function iniEditer () {/// fetch para obtener proyectos
        inicioP.then(response => response.clone().json())
        .then(response => (dataP = response.listaproyectos))
        .then(creararrayP);

}

