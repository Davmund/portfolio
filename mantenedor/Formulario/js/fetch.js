const catForms = "http://localhost:3000/mantenedor/servicios/listaCategorias.php";
/* const catForms = "https://www.davmund.cl/mantenedor/servicios/listaCategorias.php"; */
let datan = "";
let categorias = [];


class Categoria{
    constructor(id,name){
        this.id = id;
        this.name = name; 
    }
}

const defaultCat = new Categoria('nueva','Nueva categoría');

function creararray(){
    categorias = [];
    if(datan == '' || datan == null || datan == undefined){
        console.log('no hay data')
        for(var i=0; i<datan.length ; i++ ){
            categorias.push(defaultCat);
        }
        categorias.push(defaultCat);
    }else{
        for(var i=0; i<datan.length ; i++ ){
            let catid = datan[i].id_cat;
            let catname= datan[i].nombre_categoria;
            var categoria = new Categoria(catid,catname);
            categorias.unshift(categoria);
        }
        categorias.push(defaultCat);
    }
}



let inicio = fetch(catForms)
    
function iniNew () {//funcion hace la primera carga y llena las variables de categorias
    console.log('carga de categorias');
    inicio.then(response => response.clone().json())
    .then(response => (datan = response.listacategorias))
    //.then(callback);
    .then(function(){
            categorias = [];
            if(datan == '' || datan == null || datan == undefined){
                console.log('no hay data')
                for(var i=0; i<datan.length ; i++ ){
                    categorias.push(defaultCat);
                }
                categorias.push(defaultCat);
                //validaCats(categorias);
            }else{
                for(var i=0; i<datan.length ; i++ ){
                    let catid = datan[i].id_cat;
                    let catname= datan[i].nombre_categoria;
                    var categoria = new Categoria(catid,catname);
                    categorias.unshift(categoria);
                }
                categorias.push(defaultCat);
                //validaCats(categorias);
            }
    })

    

}
//ini(creararray);