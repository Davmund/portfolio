//const cargador = document.getElementById('imagenes');

        let contador = 1;
        let imgs = [];

        function iniForm (){
            validaCats(categorias);
        }
    
    
        function nuevaCat(a){//funcion que despliega o oculta el input de nueva categoría
            const dropH = document.getElementById('nuevaCatH');
            const dropCat = document.getElementById('catProy');
            const optsel = document.getElementById('categoriaProyecto');
            const f = document.getElementById('formularioProyecto')
            if(a =="nueva"){
                const inputCatL = document.createElement("label");
                inputCatL.id = "nuevaCatL";
                inputCatL.for = "nuevaCat";
                inputCatL.textContent = "Ingresar nueva categoría";
                dropCat.after(inputCatL)
    
                const inputCat = document.createElement('input');
                inputCat.id = "nuevaCat";
                inputCat.name = "nuevaCat";
                inputCat.placeholder = "Ej: Diseño";
                inputCat.type = "text";
                inputCat.required = 'required';
    
                inputCatL.appendChild(inputCat);
    
                //const nc = document.getElementById('nuevaCat');
                //nc.addEventListener('change', e => (dropH.value = nc.value),true);
                dropH.dataset.selected = 'nueva';
                dropH.value = true;
            }
            else if(a != 'nueva'){
                let opts = optsel[optsel.selectedIndex].getAttribute('data-name');
                if(document.getElementById('nuevaCatL')){
                    const l = document.getElementById('nuevaCatL');
                    f.removeChild(l);
                    dropH.value = 'false';
                    dropH.dataset.selected = opts;
                    //console.log('llegando 1'+dropCat.id);
                }else{
                    dropH.value = 'false';
                    dropH.dataset.selected = opts;
                    //console.log('llegando 2'+dropCat.id);
                }
            }

            //selectCategoria.value = "nueva";
    
        }

        function validaCats(a){//funcion que rellena drop de categorías y recibe el array de categorías
            setTimeout(() => {
                const selectCategoria = document.getElementById('categoriaProyecto');
                const dropH = document.getElementById('nuevaCatH');
                if(a == '' || a == ['nueva'] ||a.length <= 1){
                    nuevaCat('nueva');
                    for(i=0;i<categorias.length;i++){
                        let opt = document.createElement("option");
                        opt.id="nueva";
                        opt.value="nueva";
                        opt.textContent="Nueva categoría";
                        selectCategoria.appendChild(opt);
                        dropH.dataset.selected = 'nueva';
                    }
                    //alert('va')
                }else{
                    for(i=0;i<categorias.length;i++){
                        let opt = document.createElement("option");
                        opt.id= a[i].id;
                        opt.textContent= a[i].name;
                        opt.value=a[i].id;
                        opt.dataset.name = a[i].name;
                        selectCategoria.appendChild(opt);
                        let opts = selectCategoria[selectCategoria.selectedIndex].getAttribute('data-name');
                        dropH.dataset.selected = opts;
                    }
                }

                /////// event listener para ejecutar menu de categorias //////////
                selectCategoria.addEventListener('change', e => nuevaCat(selectCategoria.value),true);
                /////// event listener para ejecutar menu de categorias //////////
                const bNF = document.getElementById('submit');
                bNF.addEventListener('click', e => enviaNuevo(e),true);
            }, 1000);
        }

        function enviaNuevo(a){//funcion envia datos a php
            a.preventDefault();
            const form = document.getElementById('formularioProyecto');
            let datosN = new FormData(form);

            if(datosN.get('nombreProyecto') === '' || datosN.get('descripcionProyecto') === '' || datosN.get('imagenesProyecto[]') === ''){
                console.log(datosN.get('nombreProyecto')+' - '+datosN.get('descripcionProyecto')+' - '+datosN.get('imagenesProyecto[]'))
                toastCall(null,'error1')
            }else{
                fetch('Formulario/carga.php',{
                    method:'POST',
                    body: datosN
                })
                .then(res => res.json())
                .then(dataN => {
                    //console.log(data);
                    validaCambiosN(dataN);
                })
            }
    
        }

        function validaCambiosN(a){//funcion que recibe respuesta, actualiza variables de formulario y carga el form otra vez
            if(a != 'ok'){
                toastCall(null,'error1');
            }else{

                /* fetch('http://localhost:3000/mantenedor/servicios/listaProyectos.php') */
                fetch('https://www.davmund.cl/mantenedor/servicios/listaProyectos.php')
                .then(response5 => response5.json())
                .then(response5 => (dataP = response5.listaproyectos))
                .then(creararrayP);

                /* fetch('http://localhost:3000/mantenedor/servicios/listaCategorias.php') */
                fetch('https://www.davmund.cl/mantenedor/servicios/listaCategorias.php')
                .then(response4 => response4.json())
                .then(response4 => (datan = response4.listacategorias))
                .then(creararray)
                .then(toastCall(null,'ok'))
                .then(
                    function(){
                        setTimeout(()=>{
                            cargar('Formulario/form.html',iniForm());
                        },1000)  
                    }
                )
        
            }
    
        }
    
    