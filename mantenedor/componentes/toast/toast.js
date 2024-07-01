//toast para mantenedor
var obp = '';
const targetT = document.getElementById('boM');

class Toast {
    constructor (accion, tipo){
        this.accion = accion;
        this.tipo = tipo;
    }

    get toast(){
        return this.armaToast();
    }

    get cierra(){
        return this.cierraToast();
    }

    armaToast(a){
        let m1 = 'Debes llenar todos los datos.';
        let m2 = 'No se pudo guardar los cambios.';
        let m3 = 'Cambios guardados con exito.';
        let m4 = 'No se pudo iniciar sesión, intenta nuevamente.';
        let m5 = 'Logeado con exito.';

        let toast = document.createElement('div');
        toast.id = 'toast';
        if(this.tipo=='error1'){
            toast.innerText = m1;
            toast.className = 'toast_element  error';
        }else if(this.tipo=='error2'){
            toast.innerText = m2;
            toast.className = 'toast_element  error';
        }else if(this.tipo=='error3'){
            toast.innerText = m4;
            toast.className = 'toast_element  error';
        }else if(this.tipo=='login'){
            toast.innerText = m5;
            toast.className = 'toast_element  ok';
        }else{
            toast.innerText = m3;
            toast.className = 'toast_element  ok';
        }
        setTimeout(()=> {toast.setAttribute("style", "transform: translateX(-40px);")},100);
        targetT.appendChild(toast);
        setTimeout(()=> {this.cierraToast()},4000);

        return toast;
    }
    cierraToast(){
        const tos = document.getElementById('toast');
        tos.setAttribute("style", "transform: translateX(274px);");
        setTimeout(()=> {targetT.removeChild(tos)},1000);
    }
}

function toastCall(a,t){
    //console.log(d);
    const obj = new Toast(a,t);
    obt = obj;
    return obt.toast;
}
