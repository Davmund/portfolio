const t = document.getElementById('mainT');
let r = null;
let menu = [];
let ix = [];
let stage = 1;

function cargar(archivo,f) {
    fetch(archivo)
    .then(res1 => res1.text())
    .then(html => {
        t.innerHTML = html;
        })
        .then(f)
        .catch(e => {
            console.log('Error importando archivo: ' + e.message);
        });

}

function secciones(im){
    for(i=0; i<im.length; i++){
        var cont = 0;
        for(f=0;f<=ix.length;f++){
            const ab = new String(im[i].category);
            ab == ix[f]? cont++:cont=cont;
        }
        if (cont == 0){
            ix.push(im[i].category);
            cont=0;
        }
    }
    menu = ix;
}

function iniHome (){
    addSection(ix);
    cargaSlide();
}

secciones(imagenes);
creaMenu(ix);
cargar('paginas/home.html',iniHome);

