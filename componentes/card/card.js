const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
function creaLineas(){
    setTimeout(()=>{
        const cargaCrded = document.getElementById('educacion');
        const cargaCrexp = document.getElementById('experiencia');
        if(experiencias != ''){
            creaTarjetas(cargaCrexp,experiencias.toReversed(),'exp');
        }
        if(cursos != ''){
            creaTarjetas(cargaCrded,cursos.toReversed(),'edu');
        }
    },500)
}

function format (f){
    let form = f.split('-');
    let m = '';
    let y = ''
    form.map((elem,index)=>{
        index == 0 ? y = elem : m = months[parseInt(elem)-1];
    })
    let fecha = '<span class="aboutme_card_date">'+m+' / '+y+'</span>';
    return fecha;
}

function creaTarjetas(t,el,y){
    el.map((e,index)=>{
        let elem = '<div class="aboutme_card">';
        elem+=              index == 0? '<div class="aboutme_card_arrow firstline">':'<div class="aboutme_card_arrow interline">';
        elem+=              y== 'exp' ? '<div class="aboutme_card_left"></div>':'<div class="aboutme_card_left_2"></div>';
        elem+=           '</div>';
        elem+=           '<div class="aboutme_card_block">';
        elem+=              y== 'exp' ? '<div class="aboutme_card_head">':'<div class="aboutme_card_head_2">';
        elem+=              y== 'exp' ? '<h5 class="aboutme_card_title">'+e.nombre_exp+'</h5>':'<h5 class="aboutme_card_title">'+e.nombre_ed+'</h5>';
        elem+=              y== 'exp' ? '<h6 class="aboutme_card_subtitle">'+e.institucion_exp+'   <span class="aboutme_card_fecha">'+format(e.fecha_inicio)+' - '+format(e.fecha_hasta)+'</span></h6>':'<h6 class="aboutme_card_subtitle">'+e.institucion_ed+'   <span class="aboutme_card_fecha">'+format(e.fecha_desde)+' - '+format(e.fecha_hasta)+'</span></h6>'
        elem+=              '</div>';
        elem+=              y== 'exp' ? '<div class="aboutme_card_body">':'<div class="aboutme_card_body_2">';
        elem+=              y== 'exp' ? '<p class="aboutme_card_p">'+e.descripcion_exp+'</p>':'<p class="aboutme_card_p">'+e.descripcion_ed+'</p>';
        elem+=     '</div></div></div>';

        t.innerHTML += elem;

    })
}