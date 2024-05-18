const targetCards = document.getElementById('main');
let tar = "";

class Tarjeta {
    constructor (id,name, imag){
        this.id = id,
        this.name = name,
        this.imag = imag
    }

    get tarj(){
        return this.armaTarjeta();
    }

    armaTarjeta(){
        //console.log("va la data")
        tar = "<div id='"+this.id+"'class='tarjeta'><h1>"+this.name+"</h1><div class='imgCont'><img src='"+this.imag+"' ></div></div>";
        return targetCards.innerHTML += tar;
    }
}

function creatarjeta(){
    setTimeout(() => {
        for ( let i in pokemones){
            let t = new Tarjeta(pokemones[i].id, pokemones[i].name,pokemones[i].imag);
            t.tarj;
        }
    }, 500)
    //console.log('termina el ciclo de pokemones')

}