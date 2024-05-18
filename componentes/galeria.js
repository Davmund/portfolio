//var contenedor = document.getElementById("imagenes");
const slides = ['ilustraciones/img005.jpg','ilustraciones/img007.jpg','ilustraciones/mina-1_b.jpg'];
let index = 0;

function transition() {
    let galeria = document.getElementById("tira");
    setInterval(function(){
        let percen = index*-100;
        galeria.style.transform = "translateX("+percen+"%)";
            index++;
        if(index>=slides.length){
            index=0;
        }
    }, 4000);

}
function cargaSlide () {
    let gal = document.getElementById("biografiaImg");
    gal.innerHTML = '<div id="slide" class="slideMain"><div id="tira" class="tira"></div></div>';
    for(i=0 ; i<slides.length; i++ ){
        let galeria = document.getElementById("tira");
        var im = new String("'"+slides[i]+"'");
        galeria.innerHTML+='<div id="'+i+'" class="slide_imagen" style="background-image:url('+im+')"></div>';
        index=1;
    }
    transition();
}