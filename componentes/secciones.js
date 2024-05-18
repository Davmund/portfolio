const mainDoc = document.getElementById('central');
let menu = [];

function secciones(im){
    const ix = [];
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
    addSection(ix);
    creaMenu(ix);
    menu = ix;
}

function addSection(a){
    for(i=0;i<a.length;i++){
        mainDoc.innerHTML += '<div class="main"><div id="galeria_'+a[i]+'"><div id="title"><h2>'+a[i]+'</h2></div><div id="'+a[i]+'" class="demo"></div></div></div>'
    }
    leerjson();
}

secciones(imagenes);