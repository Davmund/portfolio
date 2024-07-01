let mensajes = '';
let user = '';
let pass = '';
let reinsert_pass = '';

function check(){
    mensajes = document.getElementById('creador_mensajes');
    const user = document.getElementById('usuario');
    const pass = document.getElementById('pass');
    const reinsert_pass = document.getElementById('reinsert_pass');
    const bNF = document.getElementById('submit');
    bNF.addEventListener('click', e => crea(e),true);

    user.addEventListener('keydown', e => validaciones(user.value,user.id),true);
    pass.addEventListener('keydown', e => validaciones(pass.value,pass.id),true);
    reinsert_pass.addEventListener('keydown', e => validaciones(reinsert_pass.value,reinsert_pass.id),true);
}

function validaciones(v,i) {
    let elem = document.getElementById(i);
    const msg = document.getElementById('msg');
    switch (i){
        case 'usuario':
            user = v;
            eval();
        break;
        case 'pass':
            pass = v;
            eval();
        break;
        case 'reinsert_pass':
            pass == v ? (elem.classList.remove("error"), msg.classList.remove("errorMsg"), reinsert_pass = v) : (elem.classList.add("error"), msg.classList.add("errorMsg"),reinsert_pass = '');
            eval();
        break;
    }
}

function eval(){
    const bNF = document.getElementById('submit');
    if(user != '' && pass != '' && pass == reinsert_pass){
        bNF.disabled = false;
    }else{
        bNF.disabled = true;
    }
}

function crea(a){//funcion envia datos a php
    a.preventDefault();
    const form = document.getElementById('creador_form');
    let datosL = new FormData(form);

    fetch('php/control_creaUsuarios.php',{
        method:'POST',
        body: datosL
    })
    .then(res => res.text())
    .then(resp => {
        validaCreacion(resp);
    })

}

function validaCreacion(d){
    const t = document.getElementById('creador_mensajes');
    const me = document.getElementById('mensajeria');
    me != null ? t.innerHTML = '':'';
    const form = document.getElementById('creador_form');
    let msg = document.createElement('div');
    msg.id = 'mensajeria';
    console.log(d)

   switch (d){
    case '"error0"':
        msg.className = 'createError';
        msg.innerText = 'Error de conexión, intente nuevamente';
        t.style.display = 'block';
        t.appendChild(msg);
    break;
    case '"error1"':
        msg.className = 'createError';
        msg.innerText = 'Usuario ya existe, intenta con uno diferente.';
        t.style.display = 'block';
        t.appendChild(msg);
    break;
    case '"ok"':
        msg.className = 'createSuccess';
        msg.innerText = 'Usuario Creado con exito.';
        t.style.display = 'block';
        t.appendChild(msg);
        form.reset();
    break;
   }
}


document.addEventListener("DOMContentLoaded", check, false);