let lOriginal = [];
let lfiltrada = [];
let lcOriginal = [];
let lcfiltrada = [];

function iniEditExp (s){
        s == 'lexpEdi'? armaLista('editorM_lista','experiencias',''): armaLista('editorM_lista','educacion','');
        pintaExperiencias(s);
}

function filtraLista (p,t){
    lfiltrada = [];
    t.innerHTML ='';
    if(p!='todos'){
        for (i=0;i<lOriginal.length;i++) {
            if(lOriginal[i].category == p){
                lfiltrada.push(lOriginal[i]);
            }
        }
    }else{
        lfiltrada = lOriginal;
    }

    pintaExperiencias('ed');

}

function eval(a,e,s){
    console.log(e)
    switch (s) {
        case 'lexpEdi':
            for(i=0;i<e.length;i++){
                if(e[i].id_exp === a){
                    modCall(e[i]);
                    console.log(s);
                }
            }
        break;
    }
    switch (s) {
        case 'educEdi':
            for(i=0;i<e.length;i++){
                if(e[i].id_ed === a){
                    modCall(e[i]);
                    console.log(s);
                }
            }
        break;
    }
}

function pintaExperiencias(s){
    let el = '';
    s == 'lexpEdi'? el = lOriginal: el = lcOriginal;
    setTimeout(() => {
        const mainT = document.getElementById('titulolEd');
        const mainST = document.getElementById('labelEd');
        s == 'lexpEdi'? (mainT.innerText = 'Editar Experiencia',mainST.innerText = 'Lista de experiencias laborales'):
                        (mainT.innerText = 'Editar Educación',mainST.innerText = 'Lista de estudios, cursos y diplomados');

      }, 500);
}