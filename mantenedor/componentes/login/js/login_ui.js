function check(){
    const bNF = document.getElementById('submit');
    bNF.addEventListener('click', e => logea(e),true);
}

function logea(a){//funcion envia datos a php
    a.preventDefault();
    const form = document.getElementById('log_form');
    let datosL = new FormData(form);

    if(datosL.get('usuario') === '' || datosL.get('pass') === ''){
        toastCall(null,'error1')
    }else{
        fetch('componentes/login/php/control_login.php',{
            method:'POST',
            body: datosL
        })
        .then(res => res.text())
        .then(resp => {
            validaLogin(resp);
            console.log(resp);
        })
    }
}
function opson(){
    let sess = Math.random();
    sessionStorage.setItem('session', sess)
}

function validaLogin(d){
    console.log(d)
    if(d == 'ok'){
        trigger();
        toastCall(null,'login');
        opson();
    }else{
        toastCall(null,'error3');
    }
}