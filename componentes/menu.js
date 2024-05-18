const menuDoc = document.getElementById('menu_options');
let men = ['Sobre mi']
let options = '';

function creaMenu(o){
    for(i=0;i<o.length;i++){
        men.push(o[i])
    }
    men.forEach(option => (options += '<li data-bot="option" id="_'+option+'">'+option+'</a></li>')
    )
    return menuDoc.innerHTML += '<ul id="menu_options" class="header_menu_options">'+options+'</ul>';
}

function vueltaAltop (){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}

function menuNavega(a){
    let header = document.getElementById('header')
    let H = header.getBoundingClientRect();
    if(a != '_Sobre mi'){
        let trgt = document.getElementById('galeria'+a);
        let pos = trgt.getBoundingClientRect();
        window.scrollTo({
            top: (pos.top+scrollY)-(H.height+20),
            left: 0,
            behavior: "smooth",
          });
    }else{
        //alert(a)
    }
}

setTimeout(() => {

     /////// event listener para ejecutar menu //////////
    const menuBoton = document.querySelectorAll("[data-bot='option']");
    for (const option of menuBoton) {
        option.addEventListener('click', e => menuNavega(option.id),true);
    }
    /////// event listener para ejecutar menu //////////

},500)

