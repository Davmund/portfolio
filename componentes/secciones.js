function addSection(a){
    const mainDoc = document.getElementById('central');
    for(i=0;i<a.length;i++){
        mainDoc.innerHTML += '<div class="main"><div id="galeria_'+a[i]+'"><div id="title"><h2>'+a[i]+'</h2></div><div id="'+a[i]+'" class="demo"></div></div></div>'
    }
    leerjson();
}

//secciones(imagenes);