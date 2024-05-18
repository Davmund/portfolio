const pok = "https://pokeapi.co/api/v2/pokemon/";
var data = "";
var pokemones = [];


class Pokemon{
    constructor(id,name,imag){
        this.id = id;
        this.name = name;
        this.imag = imag;   
    }
}

function creararray(){
    let im = "";
    let name ="";

    for(var i=0; i<data.length ; i++ ){
        let id = data.indexOf(data[i]);
        fetch(data[i].url)
        .then(response => response.json())
        .then(response => (im = response.sprites.other["official-artwork"].front_default, name=response.name))
        .then(function (){
            var poke = new Pokemon(id,name,im);
            pokemones.splice(id,0,poke);
        }
    )
    }
}

let inicio = fetch(pok)
    
function ini (callback) {
    inicio.then(response => response.json())
    .then(response => (data = response.results))
    .then(creararray)
    .then(callback)

}

ini(creatarjeta);