let mn = document.getElementById('trgtMain'); 
let min = document.getElementById('boM'); 
/////// event listener para ejecutar menu //////////
const optMenu = document.querySelectorAll('li[data-name="menuOpt"]');
for (const op of optMenu) {
        op.addEventListener('click', e => adminChange(op.id),true);
    }
/////// event listener para ejecutar menu //////////

function adminChange(a){
    if(a=='new'){
        cargar('Formulario/form.html',iniForm());
    }
    else if(a=='edit'){
        cargar('Editor/editor.html',iniEdit());
    }
    else if(a=='lexp'){
        cargar('Experiencia/formexp.html',iniExperiencia('lexp'));
    }
    else if(a=='lexpEdi'){
        cargar('Experiencia/editor.html',iniEditExp('lexpEdi'));
    }
    else if(a=='educ'){
        cargar('Experiencia/formexp.html',iniExperiencia('educ'));
    }
    else if(a=='educEdi'){
        cargar('Experiencia/editor.html',iniEditExp('educEdi'));
    }
    else if(a =='login'){
        cargar('componentes/login/login.html','login');
    }
}

function cargar(archivo,f) {
    fetch(archivo)
        .then(res => res.clone().text())
        .then(html => {
            mn.innerHTML = html;
         })
         .then(f)
         .catch(e => {
             console.log('Error importando archivo: ' + e.message);
         });
}

/////// función para despliegue de menu //////////
const mtt = document.querySelectorAll('.menu');
const mtto = document.querySelectorAll('.menu_opt');
let harr = ['height:112px', 'height:112px', 'height:112px'];
for (let op=0;op<mtt.length;op++) {
    mtt[op].addEventListener('click', e => cambiaMenu(mtt[op]),true);
}

async function adminMenu(){
    for(i=0;i<mtto.length;i++){
        let ha = harr[i];
        mtto[i].dataset.status == 1? mtto[i].setAttribute('style', ha):mtto[i].setAttribute("style", "height:0;");
    }

}

function cambiaMenu(e){
    let on = function(e){e.classList.add('onm');e.classList.remove('offm');}
    let off = function(e){e.classList.add('offm');e.classList.remove('onm');}

    for(i=0;i<mtto.length;i++){
        mtto[i].dataset.of == e.id? (mtto[i].dataset.status = '1', on(mtt[i])):( mtto[i].dataset.status = '0',off(mtt[i]));
    }
    adminMenu();
}

//carga de variables para fomulario de nuevo proyecto

async function trigger (){
    await adminMenu()
    iniNew();
    iniEditer();
    document.getElementById('menu').style.visibility = 'visible';
    mn.innerHTML = '';
}

async function prev() {
    if(sessionStorage.getItem('session')){
        trigger();
    }else{
        adminChange('login');
        setTimeout(() => {
            check()
        },500)
    }
    
}

prev();