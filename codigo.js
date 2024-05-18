var mod = document.getElementById("modal");
var slide = "componentes/galeriaCentral.html"
const imgs = ['ilustraciones/img005.jpg','ilustraciones/img007.jpg','ilustraciones/mina-1_b.jpg'];
var contador = 0;

function leerjson (){
    for (var i = 0; i < imagenes.length; i++){
        var contenedor2 = document.getElementById(imagenes[i].category);
        const arr = new Array (imagenes[i].images[0],imagenes[i].Title,imagenes[i].desc);
        const arrR = new String("'"+arr+"'");

        var im = new String("'"+imagenes[i].images[0]+"'");
        const param = i;
        contenedor2.innerHTML+= '<div id="oblongo" class="oblongo" style="background-image:url('+im+');"><div data-elem="wimg" id="'+i+'"><h3>'+imagenes[i].Title+'</h3><p>'+imagenes[i].desc+'</p></div></div>'
        /*if(imagenes[i].orientacion == "V"){
            contenedor2.innerHTML+= '<div id="oblongo" class="oblongo" style="background-image:url('+im+');"><div data-elem="wimg" id="'+i+'"><h3>'+imagenes[i].Title+'</h3><p>'+imagenes[i].desc+'</p></div></div>'
        }else{
            contenedor2.innerHTML+= '<div id="apaisado" class="apaisado" style="background-image:url('+im+');"><div data-elem="wimg" id="'+i+'"><h3>'+imagenes[i].Title+'</h3><p>'+imagenes[i].desc+'</p></div></div>'
        }*/
    }

    /////// event listener para ejecutar modal //////////
    const dvimg = document.querySelectorAll('[data-elem="wimg"]');
    for (const wimg of dvimg) {
        //// antigua invocación a clase modal /////// wimg.addEventListener('click', e => llamada(wimg.id),true);
        wimg.addEventListener('click', e => proyCall(wimg.id),true);
    }
    /////// event listener para ejecutar modal //////////
}

window.onscroll = function() {
    var header = document.getElementById('header');
    var logo = document.getElementById('logo');

    if (window.scrollY > 0){
        logo.classList.add('logoS'); logo.classList.remove('logoL');

    } else {
        logo.classList.add('logoL'); logo.classList.remove('logoS');
    }
  };


cargaSlide ();
