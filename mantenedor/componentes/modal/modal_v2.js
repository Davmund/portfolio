//modal para mantenedor
var obp = '';

const target_v2 = document.getElementById('boM');

class Modal_v2 {
    constructor (){

    }

    get modal(){
        return this.armaModal(this.despliega());
    }

    get cierra(){
        return this.cierraModal();
    }

    armaModal(){
        let fondo = document.createElement('div');
        fondo.id = 'modal_fondo'
        fondo.className = 'modal_fondo';
        target_v2.appendChild(fondo);

        let modal = document.createElement('div');
        modal.id = 'modal_interior';
        modal.className = 'modal_interior';
        fondo.appendChild(modal);

        let cierra = document.createElement('div');
        cierra.id = 'modal_cierra';
        cierra.className = 'modal_cierra';
        modal.appendChild(cierra);
        
        let imgC = document.createElement('img');
        imgC.setAttribute('src','imgs/cross.png');
        cierra.appendChild(imgC);

        

        const c = document.getElementById('modal_cierra');
        c.addEventListener('click', e => this.cierra,true);

        return fondo;
    }

    despliega(){
        target_v2.classList.add('m_show');
    }

    cierraModal(){
        const t = document.getElementById('modal_fondo');
        obp = '';
        target_v2.removeChild(t);
    }
}

/*function modCall(d){
    //console.log(d);
    const obj = new Modal_v2();
    obp = obj;
    return obj.modal;
}*/
