const dataExp = "http://localhost:3000/mantenedor/servicios/listaExperiencias.php";
const dataCurs = "http://localhost:3000/mantenedor/servicios/listaCursos.php";
/* const dataExp = "https://www.davmund.cl/mantenedor/servicios/listaExperiencias.php";
const dataCurs = "https://www.davmund.cl/mantenedor/servicios/listaCursos.php"; */
var dataC = "";
let cursos = [];
let dataExpe = '';
let experiencias =[];

class Curso{
    constructor(id,fecha_inicio,fecha_hasta,name,institucion_ed,descripcion_ed){
        this.id = id;
        this.fecha_inicio = fecha_inicio;
        this.fecha_hasta = fecha_hasta; 
        this.name = name;
        this.institucion = institucion_ed;
        this.descripcion = descripcion_ed; 
    }
}

class Experiencia{
    constructor(id,fecha_inicio,fecha_hasta,name,institucion_exp,descripcion_exp){
        this.id = id;
        this.fecha_inicio = fecha_inicio;
        this.fecha_hasta = fecha_hasta; 
        this.name = name;
        this.institucion = institucion_exp;
        this.descripcion = descripcion_exp;
    }
}

function creararrayC(){//creación de array de cursos
    cursos = [];
        for(var i=0; i<dataC.length ; i++ ){
            let id = dataC[i].id_ed;
            let fecha_inicio= dataC[i].fecha_desde;
            let fecha_hasta= dataC[i].fecha_hasta;
            let name= dataC[i].nombre_ed;
            let institucion= dataC[i].institucion_ed;
            let descripcion= dataC[i].descripcion_ed;
            var curso = new Curso(id,fecha_inicio,fecha_hasta,name,institucion,descripcion);
            cursos.push(curso);
        }
        lcOriginal=cursos;
}

function creararrayExp(){//creación de array de experiencias
    experiencias = [];
        for(var i=0; i<dataExpe.length ; i++ ){
            let id = dataExpe[i].id_exp;
            let fecha_inicio= dataExpe[i].fecha_inicio;
            let fecha_hasta= dataExpe[i].fecha_hasta;
            let name= dataExpe[i].nombre_exp;
            let institucion= dataExpe[i].institucion_exp;
            let descripcion= dataExpe[i].descripcion_exp;

            var experiecia = new Experiencia(id,fecha_inicio,fecha_hasta,name,institucion,descripcion);
            experiencias.push(experiecia);
        }
        lOriginal=experiencias;
}


let inicioExp = fetch(dataExp);
let inicioCur = fetch(dataCurs);

function iniFEdCur () {///fetch para obtrener cursos
    inicioCur.then(response => response.clone().json())
        .then(response => (dataC = response.listacursos))
        .then(creararrayC);

}

function iniFEdExp () {/// fetch para obtener experiencias
    inicioExp.then(response => response.clone().json())
        .then(response => (dataExpe = response.listaexperiencias))
        .then(creararrayExp);

}

iniFEdCur();
iniFEdExp();

