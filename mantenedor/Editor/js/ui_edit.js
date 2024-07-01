let lpOriginal = [];
let lPfiltrada = [];

function iniEdit (){
    pinta(categorias);
    armaLista('editorM_lista','proyectos','')
}

function pinta(a){
    if(a=='null'){
        console.log('no hay data');
    }else{
        console.log('hay data');
        setTimeout(() => {
            catOp(a);
            const butF = document.getElementById('drpcategoria');
            butF.addEventListener('change', e => armaLista('editorM_lista','proyectos',butF.value),true);
          }, 1000);
    }
}

function catOp(e){
    const selectcatedit = document.getElementById('drpcategoria');
    for(i=0;i<e.length;i++){
        if(e[i].id != 'nueva'){
            let o = document.createElement("option");
            o.id= e[i].id;
            o.value= e[i].id;
            o.textContent= e[i].name;
            selectcatedit.appendChild(o);
        }
    }
}

function filtraLista (p,t){
    lPfiltrada = [];
    t.innerHTML ='';
    if(p!='todos'){
        for (i=0;i<lpOriginal.length;i++) {
            if(lpOriginal[i].category == p){
                lPfiltrada.push(lpOriginal[i]);
            }
        }
    }else{
        lPfiltrada = lpOriginal;
    }

    pintaProyectos('ed');

}