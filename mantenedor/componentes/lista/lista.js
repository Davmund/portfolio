let lista = '';
let destino_lista = '';
let tipoLista = '';
let filtra = '';
let elmts = '';

function armaLista(d,t,c){
    c != '' ? filtra = c: filtra ='';
    tipoLista = t;
    switch(t){
        case 'proyectos':
            elmts = lpOriginal;
        break; 
        case 'experiencias':
            elmts = lOriginal;
        break; 
        case 'educacion':
            elmts = lcOriginal;
        break; 
    }
    setTimeout(()=>{
        destino_lista = document.getElementById(d);
        destino_lista.innerHTML != ''? destino_lista.innerHTML = '' : null;
        elmts.map(creaFila);
        listener();
    },500)
}
function creaFila(valor,index){
    let fila = document.createElement('div');
        fila.className = 'fila_proyecto';
        fila.id = valor.id;
        fila.dataset.ind = index;
        fila.dataset.tipo = tipoLista;
    
    let span = document.createElement('span')
        span.innerText = valor.name;
        fila.appendChild(span);

    let b = document.createElement("a");
        b.className = "fila_edit";
        b.dataset.ind = index;
        b.textContent = 'Editar';
        fila.appendChild(b);

    let c = document.createElement("a");
        c.className = "fila_delete";
        c.dataset.ind = index;
        c.textContent = 'Eliminar';
        tipoLista == 'proyectos' ? null:fila.appendChild(c);

    filtra != '' && filtra !='todos' ? (filtra == valor.category ? (destino_lista.appendChild(fila),console.log('hay elementos para filtrar')): console.log('nada')): (destino_lista.appendChild(fila),console.log('no hay elementos para filtrar'));
}
function listener(){
    let ed = document.querySelectorAll('.fila_edit');
    let de = document.querySelectorAll('.fila_delete');
    
    for(const o of ed){
        //r.addEventListener('click', e => modCall(elmts[r.dataset.ind]),true);
        switch(tipoLista){
            case 'proyectos':
                o.addEventListener('click', e => callEditaP(elmts[o.dataset.ind],tipoLista),true)
            break; 
            default:
                o.addEventListener('click', e => callFormulario(elmts[o.dataset.ind],tipoLista),true);
                
        }
    }

    for(const o of de){
        //r.addEventListener('click', e => modCall(elmts[r.dataset.ind]),true);
        switch(tipoLista){
            case 'proyectos':
                ''
            break; 
            default:
                o.addEventListener('click', e=> callConfirmacion(elmts[o.dataset.ind],tipoLista))
                
        }
    }
}